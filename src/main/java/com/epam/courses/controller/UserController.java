package com.epam.courses.controller;

import com.epam.courses.entity.*;
import com.epam.courses.paths.Paths;
import com.epam.courses.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = Paths.USER)
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public User getUser(@PathVariable(value = "id") Integer id) {
        return userService.getUser(id);
    }
}
