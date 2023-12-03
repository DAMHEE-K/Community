package com.rest.study.comment.controller;

import com.rest.study.board.dto.FoodBoardCreateDto;
import com.rest.study.comment.dto.CommentDto;
import com.rest.study.comment.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


@CrossOrigin(origins ="http://localhost:3000")
@RestController
@RequestMapping("/comments")
public class CommentController {

    @Autowired
    CommentService commentService;

    @GetMapping("/{id}")
    public ResponseEntity<List<CommentDto>> getComments(@PathVariable Long id) {
        return ResponseEntity.ok(commentService.getComments(id));
    }

    @PostMapping("/{id}")
    public ResponseEntity<CommentDto> writeComment(@PathVariable Long id, @RequestBody CommentDto commentDto) {
        System.out.println("controller parameter = " + id + " " + commentDto);
        CommentDto result = commentService.writeComment(id, commentDto);
        System.out.println("result = " + result);
        return ResponseEntity.ok(result);
    }
}
