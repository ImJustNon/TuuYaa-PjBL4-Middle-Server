const express = require("express");
const { RootController } = require("../controllers/Root.controller");
const router = express.Router();

router.get("/", RootController);


module.exports = router;