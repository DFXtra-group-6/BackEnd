import express from "express";
// import { loginUser } from "../controllers/login.controllers.js";
import User from "../Models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';

const router = express.Router();

router.post("/",

    async (req, res) => {
        const { email, password } = req.body;

        await User.findOne({ email: email })
            .then((user) => {
                bcrypt.compare(password, user.password)
                    .then((passwordCheck) => {
                        if (!passwordCheck) {
                            return res.status(400).send({
                                message: 'Incorrect password',
                                error
                            });
                        }

                        const token = jwt.sign({
                            userId: user._id,
                            userEmail: user.email
                        },
                            "RANDOM_TOKEN",
                            { expiresIn: "24h" }
                        );

                        res.status(200).json({
                            message: `Login successful`,
                            email: user.email,
                            user: user,
                            token
                        })


                    })
                    .catch((error) => {
                        res.status(400).send({
                            message: `Incorrect password`,
                            error
                        })
                    })
            })
            .catch((error) => {
                res.status(404).send({
                    message: `User not found`,
                    error
                })
            })
    })

export { router as login };