import express from "express";
import Profile from "../Models/Profile.model.js";

const router = express.Router();

router.get('/:id',
    async (req, res) => {
        try {
            const profile = await Profile.findOne({ user: req.params.id })
            res.json(profile);
        }
        catch {

        }
    });

router.put('/:id',
    async (req, res) => {
        try {
            // Checks if data is an array
            if (Array.isArray(req.body.data)) {
                await Profile.findOneAndUpdate({ user: req.body.id }, { $push: req.body.data })
            }
            // If it isn't it adds slightly differently
            await Profile.findOneAndUpdate({ user: req.body.id }, req.body.data)
        }
        catch (err) {
            console.dir(err)
        }
    })

export { router as profile };