package com.rest.study.user.service;

import com.rest.study.user.dto.JoinUserDto;
import com.rest.study.user.dto.LoginUserDto;
import com.rest.study.user.entity.Authority;
import com.rest.study.user.entity.User;
import com.rest.study.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Override
    public User findByUserId(String foodUserId) {
        return userRepository.findByUserId(foodUserId);
    }

    @Override
    public User getLoginUserByLoginId(String loginId) {
        return userRepository.findByUserId(loginId);
    }

    @Override
    public Boolean checkUserIdDuplicate(String inputUserId) {
        User user = userRepository.findByUserId(inputUserId);
        if(user == null) {
            return true;
        }
        return false;
    }

    @Override
    public void join(JoinUserDto joinUserDto) {
        User user = User.builder()
                .userId(joinUserDto.getUserId())
                .name(joinUserDto.getName())
                .authority(Authority.ROLE_USER)
                .email(joinUserDto.getEmail())
                .password(joinUserDto.getPassword())
                .phone(joinUserDto.getPhone())
                .build();
        userRepository.save(user);
    }

    @Override
    public User login(LoginUserDto loginUserDto) {
        User user = userRepository.findByUserId(loginUserDto.getUserId());
        if(user.getPassword().equals(loginUserDto.getPassword())) {
            return user;
        }
        return null;
    }
}
