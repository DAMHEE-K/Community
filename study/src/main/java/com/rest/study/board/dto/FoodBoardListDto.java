package com.rest.study.board.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FoodBoardListDto {
    List<FoodBoardReadDto> foodBoardList = new ArrayList<>();
    private Long totalCnt;
}
