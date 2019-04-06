package com.in28minutes.learning.jpa.jpaintensteps.entity.service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import com.in28minutes.learning.jpa.jpaintensteps.entity.User;

import org.springframework.stereotype.Repository;

@Repository
@Transactional
public class UserDAOService {

    @PersistenceContext
    private EntityManager entityManager;

    public long insert(User user) {
        entityManager.persist(user);
        return user.getId();
    }
}