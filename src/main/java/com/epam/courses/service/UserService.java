package com.epam.courses.service;

import com.epam.courses.dao.UserDao;
import com.epam.courses.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserService {

    @Autowired
    private UserDao userDao;

    @Transactional
    public User getUser(final Integer id) {
        return userDao.getUser(id);
    }
}
