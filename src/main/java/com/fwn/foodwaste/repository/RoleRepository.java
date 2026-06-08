package com.fwn.foodwaste.repository;

import com.fwn.foodwaste.entity.Role;
import com.fwn.foodwaste.entity.enums.RoleName;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {

    Optional<Role> findByName(RoleName name);
}
