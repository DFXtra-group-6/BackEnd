import express from "express";
import Profile from "../Models/Profile.model.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const profile = await Profile.find({}); // sends all profiles
    res.json(profile);
  } catch {}
});

export { router as profile };
