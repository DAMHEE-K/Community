package com.rest.study.comment.repository;

import com.rest.study.comment.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {
     List<Comment> findAllByFoodBoard_FoodId(Long foodId);
}
