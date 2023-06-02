package com.dismental.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dismental.entity.User;

public interface UserRepository extends JpaRepository<User,Integer>{
	Optional<User> findByUsername(String username);
}
