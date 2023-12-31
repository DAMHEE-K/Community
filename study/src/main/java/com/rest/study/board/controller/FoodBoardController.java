package com.rest.study.board.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.rest.study.board.dto.FoodBoardCreateDto;
import com.rest.study.board.dto.FoodBoardListDto;
import com.rest.study.board.dto.FoodBoardReadDto;
import com.rest.study.board.service.FoodBoardService;
import com.rest.study.user.entity.User;
import com.rest.study.user.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;


@CrossOrigin(origins ="http://localhost:3000")
@Slf4j
@RestController //  Json 형태로 객체 데이터를 반환하는 Controller
@RequestMapping("/boards")
// @Controller 모든 핸들러에 @ResponseBody 어노테이션 적용해줌
// @ResponseBody 핸들러에 반환된 자바 객체를 Response Body에 써줌
public class FoodBoardController {

    @Autowired
    private UserService userService;

    @Autowired
    private FoodBoardService foodBoardService;

    @Autowired
    private ObjectMapper objectMapper;

    @GetMapping
    public ResponseEntity<FoodBoardListDto> getBoards(@PageableDefault(size = 5, sort = "foodId", direction = Sort.Direction.DESC) Pageable pageable) {
        return ResponseEntity.ok(foodBoardService.findBoards(pageable));
    }

    @GetMapping("/search")
    public ResponseEntity<FoodBoardListDto> searchBoards (@RequestParam(name = "keyword", required = false) String keyword,
                                                                       @RequestParam(name="type", required = false) String searchType,
                                                                       @PageableDefault(size = 5, sort = "foodId", direction = Sort.Direction.DESC) Pageable pageable) {
        if(keyword != null && !keyword.isEmpty()) {
            return ResponseEntity.ok(foodBoardService.searchBoards(keyword, searchType, pageable));
        }
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<FoodBoardReadDto> getBoard(@PathVariable Long id) {
        return ResponseEntity.ok(foodBoardService.findBoard(id));
    }

    // 이미지를 넣기 위해 form-data로 데이터를 받기 때문에 RequestBody 삭제
    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<FoodBoardReadDto> writeBoard(@Valid @ModelAttribute FoodBoardCreateDto foodBoardCreateDto) {
        return ResponseEntity.ok(foodBoardService.writeBoard(foodBoardCreateDto));
    }

    @PatchMapping(value = "/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<FoodBoardReadDto> editBoard(@PathVariable Long id, @Valid @ModelAttribute FoodBoardCreateDto foodBoardDto) throws IllegalAccessException {
        User user = userService.findByUserId(foodBoardDto.getFoodUserId());
        return ResponseEntity.ok(foodBoardService.editBoard(id, foodBoardDto, user));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteBoard(@PathVariable Long id) {
        foodBoardService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}