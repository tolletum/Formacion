package com.in28minutes.learning.jpa.jpaintensteps.entity.service;

import com.in28minutes.learning.jpa.jpaintensteps.entity.User;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * UserRepository
 */
public interface UserRepository extends JpaRepository<User, Long> {

    
}