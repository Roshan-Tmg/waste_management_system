package com.fwn.foodwaste.controller;

import com.fwn.foodwaste.service.FoodDonorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class FoodDonorController {

    @Autowired
    private FoodDonorService foodDonorService;
}
