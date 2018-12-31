package com.example.springboot.act.back.login;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/back")
public class LoginAct {


    @RequestMapping("/login")
    public String login() {
        return "/back/security/login";

    }


}
