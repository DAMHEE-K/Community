package com.rest.study.common.filter;

import com.rest.study.common.utils.JwtTokenUtil;
import com.rest.study.user.entity.Authority;
import com.rest.study.user.entity.User;
import com.rest.study.user.service.UserService;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

// OncePerRequestFilter : 한 요청에 대해 한번만 실행하는 필터
// 포워딩이 발생하면 필터 체인이 다시 동작됨 (두번씩 수행하는 경우 발생)
// 인증은 여러번 처리가 불필요하기 때문에 한번만 실행해도 OK
@RequiredArgsConstructor
public class JwtTokenFilter extends OncePerRequestFilter {

    private UserService userService;
    private String secretKey;

    public JwtTokenFilter(UserService userService, String secretKey) {
        this.userService = userService;
        this.secretKey = secretKey;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String authorizationHeader = request.getHeader(HttpHeaders.AUTHORIZATION);

        // Header의 Authorization 값이 비어있으면 => Jwt Token을 전송하지 않음 (로그인하지 않음)
        if(authorizationHeader == null) {
            filterChain.doFilter(request, response); // 다음 필터로 이동
            return;
        }

        //  Header의 Authorization 값이 "Bearer "로 시작하지 않으면 (잘못된 토큰이면) => 로그인하지 않음
        if(!authorizationHeader.startsWith("Bearer ")) {
            filterChain.doFilter(request, response);
            return;
        }

        // 전송받은 값에서 'Bearer ' 뒷부분(Jwt Token) 추출
        String token = authorizationHeader.split(" ")[1];

        if(JwtTokenUtil.isExpired(token, secretKey)) {
            filterChain.doFilter(request, response);
            return;
        }

        String loginId = JwtTokenUtil.getLoginId(token, secretKey);

        // 추출한 LoginId로 user 찾기
        User loginUser = userService.getLoginUserByLoginId(loginId);

        // UsernamePasswordAuthenticationToken : 인증이 끝나고 씨큐리티 Context에 등록되는 인증(Authentication) 객체 (사용자 이름과 비밀번호를 포함)
        // SimpleGrantedAuthority : 사용자의 역할(권한) 정보를 저장하는 객체
        // WebAuthenticationDetailsSource : 인증 객체의 세부 정보를 설정하는 객체
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
                loginUser.getUserId(), null, List.of(new SimpleGrantedAuthority(loginUser.getAuthority().name())));

        // 웹 요청에 관련된 세부 정보를 생성하고 이 정보를 authenticationToken에 추가
        authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

        SecurityContextHolder.getContext().setAuthentication(authenticationToken);
        filterChain.doFilter(request, response);
    }
}
