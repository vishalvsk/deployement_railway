const express = require("express");
const router = express.Router();
const apiController = require("../controllers/apiController");

router.get("/data", apiController.getData);

module.exports = router;
