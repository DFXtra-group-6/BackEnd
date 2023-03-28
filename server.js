import express from "express";
import mongoose from "mongoose";
<<<<<<< Updated upstream
import { config } from 'dotenv';
import cors from 'cors';

import { profile } from './src/routes/profile.route.js';
=======
import { config } from "dotenv";
import bodyParser from "body-parser";

import { profile } from "./src/routes/profile.route.js";
import { login } from "./src/routes/login.route.js";
config();
>>>>>>> Stashed changes

config({ path: `.env.${process.env.NODE_ENV}` });
app.use(bodyParser.json());

const port = process.env.PORT;
const host = process.env.HOST;
const app = express();
app.use(cors());

const main = async () => {
    console.log(`Connecting to DB @ ${process.env.DB_URI}`);
    await mongoose.connect(process.env.DB_URI);
    console.log(`Connected to DB @ ${process.env.DB_URI}`);
}

main().catch(err => console.log(err));

<<<<<<< Updated upstream
app.use(`/profile`, profile);

=======
app.use(`/`, profile);
app.use("/login", login);
>>>>>>> Stashed changes
const server = app.listen(port, () => {
    const SERVERHOST = server.address().address;
    const SERVERPORT = server.address().port;
    console.log(`Server is listening on http://${SERVERHOST}:${SERVERPORT}`);
});

export default server;