package com.rest.study.board.repository;

import com.rest.study.board.entity.FoodBoard;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface FoodBoardRepository extends JpaRepository<FoodBoard, Long> {
    Page<FoodBoard> findAll(Pageable pageable);

    Page<FoodBoard> findByFoodTitleContaining(@Param("food_title") String keyword, Pageable pageable);
    Page<FoodBoard> findByFoodContentContaining(@Param("food_content") String keyword, Pageable pageable);
    Long countByFoodTitleContaining(String keyword);


}
