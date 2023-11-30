package com.rest.study.comment.controller;

import com.rest.study.comment.dto.CommentDto;
import com.rest.study.comment.service.CommentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins ="http://localhost:3000")
@RestController
@RequestMapping("/comments")
public class CommentController {

    CommentService commentService;

    @GetMapping("/{id}")
    public ResponseEntity<List<CommentDto>> getComments(@PathVariable Long id) {
        return ResponseEntity.ok(commentService.getComments(id));
    }
}
