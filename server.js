// import mongoose from "mongoose";
import connection from "./db.js";
import express from "express";
import cors from "cors";
import routed from "./routes/index.js";

const server = express();
const port = 8080;

server.use(express.json());
server.use(cors());
server.use("/", routed);

connection.once("open", function () {
	console.log("MongoDB database connection established successfully");
});

server.listen(port, () => {
	console.log(`server is running on port ${port}`);
});
