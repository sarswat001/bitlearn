const mongoose = require("mongoose");
const express = require('express');
const { Course } = require("../db");

const router = express.Router();

router.get("/:courseId",  async (req, res) => {
    let course = await Course.findById(
        req.params.courseId
    );
    if (course) {
        res.status(200).json({course});
    } else {
        res.status(404).send({ message: "COURSE not found" });
    }
});

module.exports = router