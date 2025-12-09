package com.healthecho.patient_profile_service.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/echo")
public class EchoController {
    @GetMapping
    public String sayHello(){
        return "hello patient profile";
    }
}
