package com.rest.study.common.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class StaticController {
    @RequestMapping(value="/foodboards", method= RequestMethod.GET)
    public String getFoodBoards() { return "forward:/foodboard/foodBoard_list.html"; }

    @RequestMapping(value="/foodboards/{id}", method= RequestMethod.GET)
    public String getFoodBoard() {return "forward:/foodboard/foodBoard_detail.html";}

    @RequestMapping(value="/foodboards/writeBoard", method= RequestMethod.GET)
    public String writeFoodBoard() {return "forward:/foodboard/foodBoard_write.html";}

    @RequestMapping(value="foodboards/edit/{id}", method= RequestMethod.GET)
    public String editFoodBoard() {return "forward:/foodboard/foodBoard_edit.html";}

    @GetMapping("/")
    public String index() {
        return "forward:/index.html";
    }


}
