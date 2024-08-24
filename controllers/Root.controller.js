function RootController(req, res){
    return res.json({
        status: "OK"
    });
}

module.exports = {
    RootController
}