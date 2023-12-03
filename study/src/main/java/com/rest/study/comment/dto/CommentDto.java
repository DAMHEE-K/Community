package com.rest.study.comment.dto;

import com.rest.study.comment.entity.Comment;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CommentDto {
        private String content;
        private String userId; // writer

    public static CommentDto toDto(Comment comment) {
        return new CommentDto(comment.getContent(), comment.getUser().getUserId());
    }

}
