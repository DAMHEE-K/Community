package com.rest.study.comment.service;

import com.rest.study.board.dto.FoodBoardListDto;
import com.rest.study.board.dto.FoodBoardReadDto;
import com.rest.study.comment.dto.CommentDto;
import com.rest.study.comment.entity.Comment;
import com.rest.study.comment.repository.CommentRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Transactional(rollbackFor = Exception.class)
@Service
public class CommentServiceImpl implements CommentService{

    CommentRepository commentRepository;

    @Override
    public List<CommentDto> getComments(Long id) {
        List<Comment> comments = commentRepository.findAllByFoodBoard_FoodId(id);
        return comments.stream()
                .map(CommentDto::toDto)
                .collect(Collectors.toList());
    }
}
