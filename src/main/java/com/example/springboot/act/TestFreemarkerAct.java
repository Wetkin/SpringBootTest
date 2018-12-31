package com.example.springboot.act;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/back")
public class TestFreemarkerAct {


    @RequestMapping("/index")
    public ModelAndView testIndex () {
        ModelAndView mv = new ModelAndView("/back/index/index");
        return mv;
    }
}
