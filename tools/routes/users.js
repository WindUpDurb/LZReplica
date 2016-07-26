"use strict";

const express = require("express");
const router = express.Router();
const multer = require("multer");

const User = require("../models/user");
const S3 = require("../models/s3-storage");

const upload = multer({storage: multer.memoryStorage()});


router.route("/")
    .get(function (request, response) {
        User.obtainUsers(function (error, registeredUserList) {
            if (error) response.status(400).send(error);
            response.send(registeredUserList);
        });
    });

router.post("/login", function (request, response) {
    console.log("herere")
    User.authenticate(request.body, function (error, loginData) {
        if (error) return response.status(400).send(error);
        response.send(loginData);
    });
});




module.exports = router;