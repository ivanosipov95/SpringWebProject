package com.epam.courses.controller;

import com.epam.courses.entity.*;
import com.epam.courses.paths.Parameters;
import com.epam.courses.paths.Paths;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = Paths.USER)
public class UserController {

    @RequestMapping(value = Parameters.ID, method = RequestMethod.GET)
    public User getUser(@PathVariable Integer id) {
        return new User(id);
    }
}
