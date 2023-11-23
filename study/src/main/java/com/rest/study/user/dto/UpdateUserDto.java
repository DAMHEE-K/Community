package com.rest.study.user.dto;

import com.rest.study.user.entity.User;
import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class UpdateUserDto {
    private String email;
    private String password;
    private String phone;

    public User toUser(User user) {
        user.setPhone(phone);
        user.setEmail(email);
        user.setPassword(password);
        return user;
    }
}
