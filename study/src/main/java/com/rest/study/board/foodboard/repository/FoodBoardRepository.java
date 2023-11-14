package com.rest.study.board.foodboard.repository;

import com.rest.study.board.foodboard.entity.FoodBoard;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.awt.*;
import java.util.List;

@Repository
public interface FoodBoardRepository extends JpaRepository<FoodBoard, Long> {
    Page<FoodBoard> findAll(Pageable pageable);

    Page<FoodBoard> findByFoodTitleContaining(@Param("food_title") String keyword, Pageable pageable);
}
