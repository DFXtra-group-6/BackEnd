// const express = require("express");
// const router = express.Router();
// const User = require("../Models/Login.model.js");

// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.findOne({ email: email });
//     if (!user) {
//       return res.status(400).json({ message: "Invalid email or password" });
//     }
//     const isMatch = await user.comparePassword(password);
//     if (!isMatch) {
//       return res.status(400).json({ message: "Invalid email or password" });
//     }
//     // generate a JWT token for the user and send it in the response
//     const token = await user.generateToken();
//     res.status(200).json({ user, token });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

// module.exports = router;

import express from "express";
// import { loginUser } from "../controllers/login.controllers.js";
import User from "../Models/user.model.js";

const router = express.Router();

router.route("/").post(async (req, res) => {
  const foundUser = await User.findOne({ email: req.body.email });
  console.log(foundUser);
  console.log(req.body);
  res.send(req.body);
});

// authRouter.post(/login, [
//     body(username).exists().escape(),
//     body(password).exists().escape(),
// ], signin);

export { router as login };
