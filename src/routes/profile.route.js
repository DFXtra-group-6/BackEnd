import express from "express";
import Profile from "../Models/Profile.model.js";

const router = express.Router();

router.get('/:id',
    async (req, res) => {
        try {
            console.dir(req.params.id)
            console.log('hello from profile get')
            const profile = await Profile.findOne({ user: req.params.id })
            console.dir(profile)
            res.json(profile);
        }
        catch {

        }
    });

export { router as profile };