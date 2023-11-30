package com.rest.study.board.service;

import com.rest.study.board.dto.FoodBoardCreateDto;
import com.rest.study.board.dto.FoodBoardListDto;
import com.rest.study.board.dto.FoodBoardReadDto;
import com.rest.study.user.entity.User;
import org.springframework.data.domain.Pageable;

public interface FoodBoardService {
    FoodBoardReadDto findBoard(Long id);

    FoodBoardReadDto writeBoard(FoodBoardCreateDto foodBoard);

    void deleteById(Long id);

    FoodBoardReadDto editBoard(Long id, FoodBoardCreateDto foodBoardDto, User user);
    FoodBoardListDto findBoards(Pageable pageable);

    FoodBoardListDto searchBoards(String keyword, String searchType, Pageable pageable);
}
