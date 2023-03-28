import express from "express";
import Profile from "../Models/Profile.model.js";

const router = express.Router();

router.get('/',
    async (req, res) => {
        try {
            const profile = await Profile.find({}) // sends all profiles, return array, findOne returns object?
            console.dir(profile)
            res.json(profile[0])
        }
        catch {

        }
    });

export { router as profile };