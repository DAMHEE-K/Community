package com.rest.study.board.service;

import com.rest.study.board.dto.FoodBoardCreateDto;
import com.rest.study.board.dto.FoodBoardListDto;
import com.rest.study.board.dto.FoodBoardReadDto;
import com.rest.study.board.entity.FoodBoard;
import com.rest.study.board.repository.FoodBoardRepository;
import com.rest.study.image.foodimage.dto.ImageDto;
import com.rest.study.image.foodimage.entity.FoodImageAttachment;
import com.rest.study.image.foodimage.repository.FoodImageRepository;
import com.rest.study.image.foodimage.service.FoodImageService;
import com.rest.study.user.entity.User;
import com.rest.study.user.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Transactional(rollbackFor = Exception.class)
@Service
@Slf4j
public class FoodBoardServiceImpl implements FoodBoardService{

    @Autowired
    private FoodBoardRepository foodBoardRepository;

    @Autowired
    private FoodImageRepository imageRepository;

    @Autowired
    private FoodImageService imageService;

    @Autowired
    private UserService userService;

    @Override
    public FoodBoardListDto findBoards(Pageable pageable) {
        Page<FoodBoard> boards = foodBoardRepository.findAll(pageable);
        FoodBoardListDto foodBoardListDto = new FoodBoardListDto();
        Long totalCnt = foodBoardRepository.count();
        foodBoardListDto.setTotalCnt(totalCnt);
        boards.stream().forEach(i -> foodBoardListDto.getFoodBoardList().add(FoodBoardReadDto.toDto(i)));
        return foodBoardListDto;
    }

    @Override
    public FoodBoardListDto searchBoards(String keyword, String searchType, Pageable pageable) {
        Page<FoodBoard> boards = null;
        if(searchType.equals("title")) {
            boards = foodBoardRepository.findByFoodTitleContaining(keyword, pageable);
        } else {
            boards = foodBoardRepository.findByFoodContentContaining(keyword, pageable);
        }
        FoodBoardListDto foodBoardListDto = new FoodBoardListDto();
        Long totalCnt = foodBoardRepository.countByFoodTitleContaining(keyword);
        foodBoardListDto.setTotalCnt(totalCnt);
        boards.stream().forEach(i -> foodBoardListDto.getFoodBoardList().add(FoodBoardReadDto.toDto(i)));
        return foodBoardListDto;
    }

    @Override
    public FoodBoardReadDto findBoard(Long id) {
        Optional<FoodBoard> optionalFoodBoard = foodBoardRepository.findById(id);
        if (optionalFoodBoard.isPresent()) {
            FoodBoard foodBoard = optionalFoodBoard.get();
            List<FoodImageAttachment> images = imageRepository.findByFoodBoard_foodId(id);
            foodBoardRepository.save(foodBoard);
            FoodBoardReadDto f = FoodBoardReadDto.toDto(foodBoard);
            if(images != null && images.size() > 0) {
                ImageDto i = ImageDto.builder()
                        .originName(images.get(0).getOriginName())
                        .uniqueName(images.get(0).getUniqueName())
                        .build();
                f.setImages(i);
            }
            return f;
        } else {
            throw new EntityNotFoundException("게시글이 존재하지 않습니다. : " + id);
        }
    }


    @Override
    public FoodBoardReadDto writeBoard(FoodBoardCreateDto foodBoardCreateDto) {
        User user = userService.findByUserId(foodBoardCreateDto.getFoodUserId());
        FoodBoard foodBoard = FoodBoard.builder()
                .foodContent(foodBoardCreateDto.getFoodContent())
                .foodTitle(foodBoardCreateDto.getFoodTitle())
                .user(user)
                .foodCreatedAt(Timestamp.valueOf(LocalDateTime.now()))
                .build();
        foodBoard = foodBoardRepository.saveAndFlush(foodBoard);
        if(foodBoardCreateDto.getImages() != null) {
            imageService.uploadFile(foodBoardCreateDto.getImages(), foodBoard);
        }
        return FoodBoardReadDto.toDto(foodBoard);
    }

    @Override
    public void deleteById(Long id) {
        foodBoardRepository.deleteById(id);
    }

    @Override
    public FoodBoardReadDto editBoard(Long id, FoodBoardCreateDto foodBoardCreateDto, User user) {
        FoodBoard foodBoard = foodBoardRepository.getReferenceById(id);
        foodBoardCreateDto.toFoodBoard(foodBoard, user);
        foodBoardRepository.save(foodBoard);
        if(foodBoardCreateDto.getImages() != null) {
            imageService.updateFile(foodBoardCreateDto.getImages(), foodBoard);
        }
        return FoodBoardReadDto.toDto(foodBoardRepository.saveAndFlush(foodBoard));
    }
}
