package com.example.springboot.security;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserAct {


    @GetMapping
    public String getUsers() {
        return "Hello Spring Security";
    }
}
