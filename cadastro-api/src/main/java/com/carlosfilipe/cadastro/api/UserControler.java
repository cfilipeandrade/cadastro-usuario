package com.carlosfilipe.cadastro.api;

import com.carlosfilipe.cadastro.model.User;
import com.carlosfilipe.cadastro.model.dto.UserDTO;
import com.carlosfilipe.cadastro.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

import static org.springframework.http.HttpStatus.CREATED;

@Validated
@RestController
@RequiredArgsConstructor
@RequestMapping(path = "/usuarios")
public class UserControler {

    private UserService service;

    @PostMapping
    @ResponseStatus(CREATED)
    public User save(@RequestBody User user) {
        return service.save(user);
    }

    private void salvar(){
        var user = new User("Carlos Filipe Andrade dos Santos", "037.499.923-63",
                "cfilipeas06@gmail.com", "85988769606");
        save(user);
    }

}
