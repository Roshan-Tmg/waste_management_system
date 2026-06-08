package com.fwn.foodwaste.service;

import com.fwn.foodwaste.repository.FoodDonorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FoodDonorService implements FoodDonorServiceImp{

    @Autowired
    private FoodDonorRepository foodDonorRepository;
}
