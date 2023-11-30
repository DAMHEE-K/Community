package com.rest.study.comment.service;

import com.rest.study.comment.dto.CommentDto;

import java.util.List;

public interface CommentService {
    List<CommentDto> getComments(Long id);
}
