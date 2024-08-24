const dotenv = require("dotenv");
dotenv.config();

module.exports = {
    port: process.env.PORT,
    host: process.env.HOST,
    mode: process.env.MODE,
    api: {
        host: this.mode === "DEV" ? "http://127.0.0.1:8484" : "https://tuuyaa-pjbl4-backend.vercel.app"
    }
}