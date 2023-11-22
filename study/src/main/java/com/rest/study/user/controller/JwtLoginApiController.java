package com.rest.study.user.controller;

import com.rest.study.common.utils.JwtTokenProvider;
import com.rest.study.user.dto.JoinUserDto;
import com.rest.study.user.dto.LoginUserDto;
import com.rest.study.user.entity.User;
import com.rest.study.user.repository.UserRepository;
import com.rest.study.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins ="http://localhost:3000")
@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
public class JwtLoginApiController {

    @Autowired
    private final JwtTokenProvider jwtTokenProvider;

    @Autowired
    private final UserRepository userRepository;

    @Autowired
    private UserService userService;

    @PostMapping("/join")
    public ResponseEntity<String> join(@RequestBody @Valid JoinUserDto joinUserDto) {
        if (userService.checkUserIdDuplicate(joinUserDto.getUserId())) {
            userService.join(joinUserDto);
            return ResponseEntity.ok("회원가입 성공");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("회원가입 실패. 중복된 사용자 아이디입니다.");
        }
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginUserDto loginUserDto) {
        System.out.println("loginUserDto = " + loginUserDto);
        User user = userService.login(loginUserDto);

        if (user == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("로그인 아이디 또는 비밀번호가 틀렸습니다.");
        }
        List<String> authorities = Collections.singletonList(user.getAuthority().name());
        String jwtToken = jwtTokenProvider.createToken(user.getUserId(), authorities);
        HttpHeaders responseHeaders = new HttpHeaders();
        responseHeaders.add("Authorization", "Bearer " + jwtToken);

        return ResponseEntity.ok().headers(responseHeaders).body(jwtToken);
    }

    @GetMapping("/info")
    public ResponseEntity<User> getUserInfo(@RequestHeader("Authorization") String token) {
        String userId = jwtTokenProvider.getUserPk(token.replace("Bearer ", ""));
        User user = userRepository.findByUserId(userId);
        if(user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    @PatchMapping("/update")
    public ResponseEntity<User> updateUserInfo(@RequestHeader("Authorization") String token) {
        return null;
    }


}
