import express from "express";
import User from '../Models/user.model.js';
import bcrypt from 'bcrypt';
import Profile from "../Models/Profile.model.js";

const router = express.Router();

router.post('/',
    (req, res) => {

        bcrypt
            .hash(req.body.password, 10)
            .then(async (hashedPassword) => {
                const user = new User({
                    email: req.body.email,
                    password: hashedPassword,
                });
                await user.save()
                    .then((result) => {
                        const obj = {};
                        obj.user = user._id;
                        Profile.create(obj);
                        return res.status(200).send({ message: "Registration successful", result })
                    })
                    .catch(() => { return res.status(400).send({ message: 'This user already exists' }) })
            })
            .catch((error) => {
                res.status(500).send({
                    message: "Password was not hashed successfully",
                    error
                });
            });
    });

export { router as register };