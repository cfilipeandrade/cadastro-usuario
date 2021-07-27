package com.carlosfilipe.cadastro.service;

import com.carlosfilipe.cadastro.model.User;
import com.carlosfilipe.cadastro.repository.UserRepository;

public class UserService {

    UserRepository repository;

    public User save(User user) {
        repository.save(user);
        return user;
    }
}
