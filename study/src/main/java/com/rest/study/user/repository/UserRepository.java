package com.rest.study.user.repository;

import com.rest.study.board.foodboard.entity.FoodBoard;
import com.rest.study.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends JpaRepository<User, String> {
    User findByUserId(String userId);
}
