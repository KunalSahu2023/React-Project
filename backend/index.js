import "dotenv/config";
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

//HomePage
app.get("/", (req, res) => {
    res.send("Hello");
});

//Create a new User
app.post("/register", async (req, res) => {
    try {
        const newUser = {
            email: req.body.email,
            password: req.body.password,
            name: req.body.name,
        };

        const user = await User.create(newUser);

        return res.status(201).send(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

//Login


//Logout

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
