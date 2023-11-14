const mongoose = require("mongoose");
const express = require('express');
const jwt = require("jsonwebtoken");
const { User, Course, Admin } = require("../db");
require("dotenv").config();
const { authenticateJwtAdmin,generateJwt } = require("../middleware/auth");

const router = express.Router();

router.post("/signup", async (req, res) => {
    const { username, password } = req.body;
    if (await Admin.findOne({ username })) {
        res.status(409).send("Username already exists.Try different username.");
    } else {
        const newAdmin = await Admin({ username, password });
        await newAdmin.save();
        res
        .status(200)
        .send({
            message: "Admin created successfully",
            token: generateJwt(newAdmin, "admin"),
        });
    }
});

router.post("/login", async (req, res) => {
    let admin = {
        username: req.headers.username,
        password: req.headers.password,
    };
    if (await Admin.findOne(admin)) {
        res
        .status(200)
        .send({
            message: "Logged in successfully",
            token: generateJwt(admin, "admin"),
        });
    } else {
        res.status(404).send("Admin Not Found.");
    }
});

router.post("/courses", authenticateJwtAdmin, async (req, res) => {
    const { username } = req.user;
    let validAdmin = await Admin.findOne({ username });
    let course = req.body;
    course.adminId = validAdmin._id;
    course.publishedDate = 'Work In Progress';
    course.author = username.substring(0,username.indexOf('@'));
    console.log(course);
    course = new Course(course);
    await course.save();
    res.status(200).json({
        message: "Course created successfully",
        courseId: course.courseId,
    });
});

router.put("/courses/:courseId", authenticateJwtAdmin, async (req, res) => {
    let updatedCourse = await Course.findByIdAndUpdate(
        req.params.courseId,
        req.body,
        { new: true }
    );
    if (updatedCourse) {
        res.status(200).json({ message: "Course updated successfully" });
    } else {
        res.status(404).send({ message: "COURSE not found" });
    }
});

router.get("/courses", authenticateJwtAdmin, async (req, res) => {
    const { username } = req.user;
    let validAdmin = await Admin.findOne({ username });
    res.status(200).json(await Course.find({adminId:validAdmin._id}));
});

module.exports = router