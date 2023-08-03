const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

app.use(cors());
app.use(express.json());

let ADMINS = [];
let USERS = [];
let COURSES = [];

    const userSchema = new mongoose.Schema({
        username: String,
        password: String,
        purchasedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
    });
    const adminSchema = new mongoose.Schema({
        username: String,
        password: String,
    });
    const courseSchema = new mongoose.Schema({
        title: String,
        description: String,
        price: Number,
        imageLink: String,
        published: Boolean,
        adminId: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" },
    });

    const User = mongoose.model("User", userSchema);
    const Admin = mongoose.model("Amdin", adminSchema);
    const Course = mongoose.model("Course", courseSchema);

    mongoose.connect(
        "mongodb+srv://sarswataryan:Sar02%40at@cluster0.mmitw8d.mongodb.net/"
    );

    const generateJwt = (user, type) => {
    const payload = { username: user.username };
    if (type === "user") {
        return jwt.sign(payload, process.env.USER_SECRET_KEY, { expiresIn: "1h" });
    } else {
        return jwt.sign(payload, process.env.ADMIN_SECRET_KEY, { expiresIn: "1h" });
    }
    };

    const authenticateJwtAdmin = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.ADMIN_SECRET_KEY, (err, user) => {
        if (err) {
            return res.sendStatus(403);
        }
        req.user = user;
        console.log(user);
        next();
        });
    } else {
        res.sendStatus(401);
    }
    };
    const authenticateJwtUser = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.USER_SECRET_KEY, (err, user) => {
        if (err) {
            return res.sendStatus(403);
        }
        req.user = user;
        next();
        });
    } else {
        res.sendStatus(401);
    }
    };

    // Admin routes
    app.post("/admin/signup", async (req, res) => {
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

    app.post("/admin/login", async (req, res) => {
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

    app.post("/admin/courses", authenticateJwtAdmin, async (req, res) => {
        const { username } = req.user;
        let validAdmin = await Admin.findOne({ username });
        let course = req.body;
        course.adminId = validAdmin._id;
        course = new Course(course);
        await course.save();
        res
            .status(200)
            .json({
            message: "Course created successfully",
            courseId: course.courseId,
            });
    });

    app.put("/admin/courses/:courseId", authenticateJwtAdmin, async (req, res) => {
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

    app.get("/admin/courses", authenticateJwtAdmin, async (req, res) => {
        res.status(200).json(await Course.find({}));
    });

    // User routes
    app.post("/users/signup", async (req, res) => {
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

    app.post("/users/login", async (req, res) => {
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

    app.get("/users/courses", authenticateJwtUser, async (req, res) => {
        res.status(200).json(await Course.find({ published: true }));
    });

    app.post("/users/courses/:courseId", authenticateJwtUser, async (req, res) => {
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

    app.get("/users/purchasedCourses", authenticateJwtUser, async (req, res) => {
        const user = await User.findOne({ username: req.user.username });
        res.status(200).json(user.purchasedCourses);
    });

    app.listen(3000, () => {
        console.log("Server is listening on port 3000");
    });
