package com.epam.courses.dao;

import com.epam.courses.entity.User;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UserDao {

    @Autowired
    private SessionFactory sessionFactory;

    public User getUser(final Integer id) {
        return (User) sessionFactory.openSession().load(User.class, id);
    }
}
