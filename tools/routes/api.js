"use strict";

const express = require("express");
const router = express.Router();

router.use("/users", require("./users"));
router.use("/properties", require("./propertyRoutes"));

module.exports = router;