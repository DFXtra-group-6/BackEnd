import mongoose from "mongoose";

const User = mongoose.model(
    `Login`,
    new mongoose.Schema({
        email: String,
        password: String,
        profile: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Profile"
            }
        ]
    })
);

export default Login;