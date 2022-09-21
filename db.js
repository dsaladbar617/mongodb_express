import mongoose from "mongoose";

let uri = "mongodb://localhost:27017/test_shops";
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

export default connection;
