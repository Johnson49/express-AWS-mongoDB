const express = require("express")
const app = express();
const connectDatabase = require("./database/db.connection")
const video_routes = require("./routes/video.routes")


require("dotenv").config();
connectDatabase();

app.use(express.json())
app.use(video_routes)

module.exports = app