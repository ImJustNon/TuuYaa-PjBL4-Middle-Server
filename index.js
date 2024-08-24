const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");
const cors = require("cors");
const morgan = require("morgan");
const config = require("./config/config");
const RootRouter = require("./routes/Root.route");
const AlertDevRouter = require("./routes/Alert_Dev.route");
const AlertRouter = require("./routes/Alert.route");
const jsonEncoded = express.json({
    limit: "50mb"
});
const urlEncoded = bodyParser.urlencoded({
    limit: "50mb",
    extended: false,
});


app.use(cors());
app.use(jsonEncoded);
app.use(urlEncoded);
app.use(morgan("dev"));

app.use("/api/dev", AlertDevRouter);
app.use("/api", AlertRouter);
app.use("/", RootRouter);

app.listen(config.port, () =>{
    console.log(`> Started at Port : ${config.host}:${config.port}`);
});
