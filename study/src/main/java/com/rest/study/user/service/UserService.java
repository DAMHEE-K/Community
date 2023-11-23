package com.rest.study.user.service;

import com.rest.study.user.dto.JoinUserDto;
import com.rest.study.user.dto.LoginUserDto;
import com.rest.study.user.dto.UpdateUserDto;
import com.rest.study.user.entity.User;

public interface UserService {
    User findByUserId(String foodUserId);

    User getLoginUserByLoginId(String loginId);

    Boolean checkUserIdDuplicate(String inputUserId);

    void join(JoinUserDto joinUserDto);

    User login(LoginUserDto loginUserDto);

    User updateUserInfo(UpdateUserDto updateUserDto, String userId);
}
