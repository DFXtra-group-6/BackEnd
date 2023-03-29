/* eslint-disable no-use-before-define */

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Profile"
    }
});

const User = mongoose.model("User", userSchema);

export default User;
