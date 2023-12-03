package com.rest.study.comment.service;

import com.rest.study.board.dto.FoodBoardListDto;
import com.rest.study.board.dto.FoodBoardReadDto;
import com.rest.study.board.entity.FoodBoard;
import com.rest.study.board.repository.FoodBoardRepository;
import com.rest.study.comment.dto.CommentDto;
import com.rest.study.comment.entity.Comment;
import com.rest.study.comment.repository.CommentRepository;
import com.rest.study.user.entity.User;
import com.rest.study.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Transactional(rollbackFor = Exception.class)
@Service
public class CommentServiceImpl implements CommentService{

    @Autowired
    UserRepository userRepository;

    @Autowired
    CommentRepository commentRepository;

    @Autowired
    FoodBoardRepository foodBoardRepository;

    @Override
    public List<CommentDto> getComments(Long id) {
        List<Comment> comments = commentRepository.findAllByFoodBoard_FoodId(id);
        return comments.stream()
                .map(CommentDto::toDto)
                .collect(Collectors.toList());
    }

    @Override
    public CommentDto writeComment(Long id, CommentDto commentDto) {
            System.out.println("service id = " + id);
            System.out.println("service dto = " + commentDto);
            System.out.println("service userId = " + commentDto.getUserId());
            Optional<User> user = userRepository.findById(commentDto.getUserId());
            Optional<FoodBoard> foodBoard = foodBoardRepository.findById(id);
            Comment comment = Comment.builder()
                    .foodBoard(foodBoard.get())
                    .content(commentDto.getContent())
                    .user(user.get())
                    .build();
            commentRepository.save(comment);

            System.out.println("comment = " + comment);

            return CommentDto.toDto(comment);
    }
}
