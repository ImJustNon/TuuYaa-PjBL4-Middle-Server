const axios = require("axios");
let alertData = [];
async function getAlertNowController(req, res){
    const { utcTimestamp, boxKey } = req.body ?? {}
    
    try {
        const response = await axios.post("http://127.0.0.1:8484/api/v1/box/alert/check", {
            currentTime: utcTimestamp,
            boxKey: boxKey
        });
    
        const responseData = response.data;
        
        return res.json(responseData.data);
    }
    catch(e){
        return res.json([]);
    }
}

function getAlertByBoxIdController(req, res){
    const { boxKey } = req.body ?? {};

    return res.json({
        status: "OK",
        data: boxKey
    });
}

function setAlertController(req, res){
    const { c, t, m } = req.query ?? {};

    alertData.push({
        id: alertData.length + 1,
        time: t,
        slot: c,
        meal: m.split(",")
    });
    return res.json({
        status: "OK",
        setChannel: c,
        setTime: t,
        data: alertData
    });
}

function checkAlertController(req, res){
    console.log(req.body);
    console.log(alertData);
    return res.json({
        status: "OK",
        data: alertData
    });
}

function removeAlertController(req, res){
    console.log(req.body);
    const { boxKey, alertId } = req.body ?? {};
    alertData = alertData.filter(data => data.id !== parseInt(alertId));
    return res.json({
        status: "OK",
    });
}

module.exports = {
    getAlertNowController,
    getAlertByBoxIdController,
    checkAlertController,
    setAlertController,
    removeAlertController
}