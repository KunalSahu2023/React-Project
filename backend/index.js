import "dotenv/config";
import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import cors from "cors";
import md5 from "md5";
import { User } from "./models/UserModel.js";

const app = express();

app.use(express.json());

app.use(
    cors({
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type'],
    })
);

//Create a new User
app.post("/register", async (req, res) => {
    try {
        const newUser = {
            email: req.body.email,
            password: md5(req.body.password),
            name: req.body.name,
        };

        await User.create(newUser);

        return res.status(201).json("User registered successfully", newUser.name);
    } catch (error) {
        console.log(error.message);
        res.status(500).json("Unable to register.");
    }
});

//Login
app.post("/login", async (req, res) => {
    const { email, password } = await req.body;

    try {
        const foundUser = await User.findOne({ email });

        if (!foundUser) {
            return res.status(404).json('User not found');
        }

        // Compare passwords
        if (foundUser.password !== md5(password)) {
            return res.status(401).json('Incorrect password');
        }

        res.status(200).json("Login successful", foundUser.name);

    } catch (error) {
        console.log(error.message);
        res.status(500).json("Internal server error");
    }
});

//Logout
app.post("/logout", async (req, res) => {
    try {
        return res.status(200).json("Logout successful");
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`Server is running on port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });