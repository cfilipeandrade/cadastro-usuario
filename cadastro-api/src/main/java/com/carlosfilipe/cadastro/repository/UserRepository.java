package com.carlosfilipe.cadastro.repository;

import com.carlosfilipe.cadastro.model.User;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

import java.util.UUID;

public interface UserRepository extends ReactiveMongoRepository<User, UUID> {

}
