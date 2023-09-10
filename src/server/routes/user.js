const mongoose = require("mongoose");
const express = require('express');
const jwt = require("jsonwebtoken");
const { User, Course, Admin } = require("../db");
require("dotenv").config();
const { authenticateJwtUser,generateJwt } = require("../middleware/auth");

const router = express.Router();

router.post("/signup", async (req, res) => {
    const { username, password } = req.body;
    if (await User.findOne({ username })) {
        res.status(409).send("Username already exists.Try different username.");
    } else {
        const newUser = new User({ username, password });
        await newUser.save();
        res
        .status(200)
        .send({
            message: "User created successfully",
            token: generateJwt(newUser, "user"),
        });
    }
});

router.post("/login", async (req, res) => {
    let user = {
        username: req.headers.username,
        password: req.headers.password,
    };
    if (await User.findOne(user)) {
        res
        .status(200)
        .send({
            message: "Logged in successfully",
            token: generateJwt(user, "user"),
        });
    } else {
        res.status(401).send("---INCORRECT USERNAME OR PASSWORD---");
    }
});

router.get("/courses", authenticateJwtUser, async (req, res) => {
    res.status(200).json(await Course.find({ published: true }));
});

router.post("/courses/:courseId", authenticateJwtUser, async (req, res) => {
    const { username } = req.user;
    let validUser = await User.findOne({ username });
    if (validUser) {
        let boughtCourse = await Course.findById(req.params.courseId);
        if (boughtCourse) {
        console.log(validUser);
        validUser.purchasedCourses.push(boughtCourse);
        await validUser.save();
        res.status(200).send({ message: "Course purchased successfully" });
        } else {
        res.status(404).send({ message: "COURSE not found" });
        }
    } else {
        res.status(404).json({ message: "User not found" });
    }
});

router.get("/purchasedCourses", authenticateJwtUser, async (req, res) => {
    const user = await User.findOne({ username: req.user.username });
    res.status(200).json(user.purchasedCourses);
});

module.exports = router