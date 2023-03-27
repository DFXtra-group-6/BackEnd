import express from "express";
import Profile from "../Profile.model";

const router = express.router();

router.get('/',
    async (req, res) => {
        try {
            const profile = await Profile.find({}) // sends all profiles
            res.json(profile)
        }
        catch {

        }
    });

export { router as profile };