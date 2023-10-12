package com.rest.study.user.dto;

import lombok.Data;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;

@Data
@Valid
public class JoinUserDto {

    @NotBlank(message = "아이디는 필수입니다.")
    private String userId;
    @NotBlank(message = "이름은 필수입니다.")
    private String name;
    @NotBlank(message = "비밀번호는 필수입니다.")
    private String password;
    @NotBlank(message = "이메일은 필수입니다.")
    private String email;
    @NotBlank(message = "핸드폰 번호는 필수입니다.")
    private String phone;
}
