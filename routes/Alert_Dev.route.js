const express = require("express");
const { getAlertNowController, getAlertByBoxIdController, checkAlertController, setAlertController, removeAlertController } = require("../controllers/Alert_Dev.controller");
const router = express.Router();
const bodyParser = require("body-parser");
const urlEncoded = bodyParser.urlencoded({
    limit: "50mb",
    extended: false,
});

router.post("/alert/now", urlEncoded, getAlertNowController);
router.get("/alert/all", urlEncoded, getAlertByBoxIdController);

router.post("/alert/check", urlEncoded, checkAlertController);
router.post("/alert/delete", urlEncoded, removeAlertController);
router.get("/alert/set", urlEncoded, setAlertController);

module.exports = router;