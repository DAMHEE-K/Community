package com.rest.study.common.utils;

import com.rest.study.user.entity.MyUserDetails;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;
import java.util.Base64;
import java.util.Date;
import java.util.List;

// 토큰을 생성하고 검증하는 클래스
@RequiredArgsConstructor
@Component
public class JwtTokenProvider {
    // 원래는 application 문서에 숨겨둬야 함
    private static String secretKey = "community-secret";
    private static final long tokenValidTime = 30 * 60 * 1000L; // 유효시간

    private final UserDetailsService userDetailsService;

    // secertKey를 Base64로 인코딩
    @PostConstruct
    protected  void init() {
        secretKey = Base64.getEncoder().encodeToString(secretKey.getBytes());
    }

    public static String createToken(String userPk, List<String> roles) {
        // 토근에 담을 정보(payload)를 담는 곳 (key-value의 한 쌍으로 이루어짐)
        // 토근의 발급자, 제목, 대상자, 만료시간 등 정보가 담겨있음
        Claims claims = Jwts.claims().setSubject(userPk);
        claims.put("roles", roles);

        Date now = new Date();

        // issuedAt : 발급시간
        // expiration : 만료시간
        // signWith : 지정된 키와 알고리즘을 사용해 토큰에 서명
        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(now)
                .setExpiration(new Date(now.getTime() + tokenValidTime))
                .signWith(SignatureAlgorithm.HS256, secretKey)
                .compact();
    }

    // jwt 토큰에서 인증 조회
    public Authentication getAuthentication(String token) {
        MyUserDetails userDetails = (MyUserDetails) userDetailsService.loadUserByUsername(this.getUserPk(token));
        return new UsernamePasswordAuthenticationToken(userDetails, "", userDetails.getAuthorities());
    }

    // JWT : JWT는 클레임(claim) 정보를 포함한 JSON 객체로 이뤄진 토큰
    // JWS : JWS는 JWT의 서명 부분을 지칭하는 용어
    public String getUserPk(String token) {
        return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody().getSubject();
    }

    public String resolveToken(HttpServletRequest request) {
        return request.getHeader("Authorization");
    }


    // 토큰의 유효성 및 만료일자 확인
    public static boolean isExpired(String token) {
        try {
            Jws<Claims> claims = Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token);
            return !claims.getBody().getExpiration().before(new Date());
        } catch (Exception e) {
            return false;
        }
    }
}
