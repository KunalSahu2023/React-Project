import 'dotenv/config';
import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import cors from "cors";
import { User } from "./models/userModel.js";

const app = express();

app.use(express.json());

app.use(
    cors({
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type'],
    })
);

app.get("/", (req, res) => {
    res.send("Hello");
});

app.post("/submit", (req, res) => {

});

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
    })
    .catch((error) => {
        console.log(error);
    });
app.listen(PORT, () => {
    console.log(`App is listening to port: ${PORT}`);
});
