const express = require("express");
const {connectMongoDB} = require("./connection");
const {logResqRes} = require("./middlewares")
const userRouter = require("./routes/user");

const app = express();
const port = 8000;

// Connection
connectMongoDB("mongodb://127.0.0.1:27017/youtube-app-1")
.then(() => console.log("MongoDB Connected"))

// Middlewares
app.use(express.urlencoded({ extended: false })); 
app.use(logResqRes("log.txt"))

// Routes
app.use("/api/users", userRouter);

app.listen(port);