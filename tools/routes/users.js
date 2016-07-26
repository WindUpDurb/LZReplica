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


router.post("/uploadPhoto/:userId/:beerId", upload.single("newBeerPhoto"), function (request, response, next) {
    S3.upload(request.file, function (error, returnData) {
        if (error) response.status(400).send(error);
        let beerMemory = {
            _id: request.params.userId,
            beerId: request.params.beerId,
            imageUrl: returnData.imageUrl
        };
        User.addBeerMemory(beerMemory, function (error, updatedUser) {
            if (error) response.status(400).send(error);
            response.send();
        });
    });
});




module.exports = router;