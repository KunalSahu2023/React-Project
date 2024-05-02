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
app.post("/register", (req, res) => {
    try {
        const newUser = {
            email: req.body.email,
            password: md5(req.body.password),
            name: req.body.name,
        };

        User.create(newUser);

        return res.status(201).json({ message: "User registered successfully", name: newUser.name });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Unable to register. Try again." });
    }
});

//Login
app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const foundUser = await User.findOne({ email });

        if (!foundUser) {
            return res.status(404).json({ message: 'User not found.' });
        }

        // Compare passwords
        if (foundUser.password !== md5(password)) {
            return res.status(401).json({ message: 'Incorrect password.' });
        }

        res.status(200).json({ message: "Login successful", name: foundUser.name });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Internal server error." });
    }
});

//Logout
app.post("/logout", (req, res) => {
    try {
        return res.status(200).json({ message: "Logout successful" });
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