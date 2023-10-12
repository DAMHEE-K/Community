package com.rest.study.user.controller;

import com.rest.study.common.utils.JwtTokenUtil;
import com.rest.study.user.dto.JoinUserDto;
import com.rest.study.user.dto.LoginUserDto;
import com.rest.study.user.entity.User;
import com.rest.study.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
@RequestMapping("/jwt-login")
public class JwtLoginApiController {

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
        User user = userService.login(loginUserDto);

        if(user == null) {
            ResponseEntity.status(HttpStatus.BAD_REQUEST).body("로그인 아이디 또는 비밀번호가 틀렸습니다.");
        }

        String secretKey = "my-secret-key-123123";
        long expireTimeMs = 1000 * 60 * 60;     // Token 유효 시간 = 60분
        String jwtToken = JwtTokenUtil.createToken(loginUserDto.getUserId(), secretKey, expireTimeMs);
        return ResponseEntity.ok(jwtToken);
    }
}
