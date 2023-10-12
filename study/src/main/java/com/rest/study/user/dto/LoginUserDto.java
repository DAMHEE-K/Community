package com.rest.study.user.dto;

import lombok.Data;

@Data
public class LoginUserDto {
    private String userId;
    private String password;
}
