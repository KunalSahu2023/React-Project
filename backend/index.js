import "dotenv/config";
import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import cors from "cors";
import md5 from "md5";
import { User } from "./models/userModel.js";

const app = express();
let isLoggedIn = false;

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
            password: md5(req.body.password),
            name: req.body.name,
        };

        const user = await User.create(newUser);

        isLoggedIn = true;

        //TODO: add redirect route
        return res.status(201).json({ message: "User registered successfully", user });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});
//TODO: send username, send isLoggedIn;
//Login
app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const foundUser = await User.findOne({ email });

        if (!foundUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Compare passwords
        if (foundUser.password !== md5(password)) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        isLoggedIn = true;
        console.log(isLoggedIn);

        res.status(200).json({ message: "Login successful" });

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: "Internal server error" });
    }
});

//Logout
app.post("/logout", async (req, res) => {
    try {
        isLoggedIn = false;
        console.log(isLoggedIn);

        return res.status(200).send({ message: "Logout successful" });
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