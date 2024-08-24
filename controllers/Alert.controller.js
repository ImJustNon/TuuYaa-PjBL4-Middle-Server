const axios = require("axios");
const config = require("../config/config");

async function getTodayAlertController(req, res){
    const { boxKey, currentTime } = req.body ?? {};

    console.log(currentTime);

    if(!boxKey || !currentTime){
        return res.json({
            status: "FAIL",
            message: "Please fill all require informations",
        });
    }

    try {
        const response = await axios.post(`${config.api.host}/api/v1/box/alert/check`, {
            currentTime: currentTime,
            boxKey: boxKey
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        const responseData = response.data;

        if(responseData.status === "FAIL"){
            return res.json({
                status: responseData.status,
                message: responseData.message
            });
        }

        const alertDataMapped = responseData.data.map(data =>{
            return {
                id: data.id,
                time: String(data.alert_timestamp_utc),
                slot: data.alert_slot[0],
                meal: data.meal
            }
        });

        console.table(alertDataMapped);

        return res.json({
            status: responseData.status,
            message: responseData.message,
            data: alertDataMapped
        }); 
    }
    catch(e){
        return res.json(e);
    }
}

async function removeAlertController(req, res) {
    const { boxKey, alertId } = req.body ?? {};

    console.log(req.body);

    if(!boxKey || !alertId){
        return res.json({
            status: "FAIL",
            message: "Please fill all require informations",
        });
    }

    try {
        const response = await axios.post(`${config.api.host}/api/v1/box/alert/delete`, {
            boxKey: boxKey,
            alertId: alertId
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        const responseData = response.data;

        if(responseData.status === "FAIL"){
            return res.json({
                status: responseData.status,
                message: responseData.message
            });
        }

        return res.json(response.data);
    }
    catch(e){
        return res.json(e);
    }
}

module.exports = {
    getTodayAlertController,
    removeAlertController
}