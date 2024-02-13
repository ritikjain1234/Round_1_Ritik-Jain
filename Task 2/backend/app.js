require('dotenv').config()
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 6000;
const router = require("./src/routes")
app.use(cors());
app.use(express.json());
app.use(router);

const start = () =>{
    try {
        app.listen(PORT,()=>{
            console.log(`I am live in localhost : ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();