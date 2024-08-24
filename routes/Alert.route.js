const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const { getTodayAlertController } = require("../controllers/Alert.controller");
const { removeAlertController } = require("../controllers/Alert.controller");
const urlEncoded = bodyParser.urlencoded({
    extended: false,
    limit: "50mb"
});

router.post("/alert/gettoday", urlEncoded, getTodayAlertController);
router.post("/alert/delete", urlEncoded, removeAlertController);

module.exports = router;