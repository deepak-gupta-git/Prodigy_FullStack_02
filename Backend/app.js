const express = require("express");
require("dotenv").config();
const app = express();
const router = require("../Backend/Router/auth-router");
const ConnectDb = require("../Backend/Utills/utills");
const cors = require("cors");

const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, PATCH, DELETE, HEAD",
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

const PORT = process.env.PORT || 2000; 

app.get("/", (req, res) => {
    res.status(200).send("Hello from root");
});
app.use("/api/auth", router);



ConnectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`App is listening on port ${PORT}`);
    });
});