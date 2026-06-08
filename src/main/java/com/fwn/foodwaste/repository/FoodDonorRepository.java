package com.fwn.foodwaste.repository;

import com.fwn.foodwaste.entity.FoodDonor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FoodDonorRepository extends JpaRepository<FoodDonor, Long> {
}
