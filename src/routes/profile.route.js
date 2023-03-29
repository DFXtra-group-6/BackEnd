import express from "express";
import Profile from "../Models/Profile.model.js";

const router = express.Router();

router.get('/:id',
    async (req, res) => {
        try {
            console.dir(req.params.id)
            const profile = await Profile.findOne({ user: req.params.id })
            res.json(profile);
        }
        catch {

        }
    });

router.put('/:id',
    async (req, res) => {
        try {
            await Profile.findOneAndUpdate({ user: req.body.id }, { $push: req.body.data })
        }
        catch (err) {
            console.dir(err)
        }
    })

export { router as profile };