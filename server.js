import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import { config } from "dotenv";
import bodyParser from "body-parser";

import { profile } from "./src/routes/profile.route.js";
import { login } from "./src/routes/login.route.js";
import { register } from "./src/routes/register.route.js";

config({ path: `.env.${process.env.NODE_ENV}` });

const port = process.env.PORT;
const host = process.env.HOST;
const app = express();
app.use(bodyParser.json());
app.use(cors());

const main = async () => {
    console.log(`Connecting to DB @ ${process.env.DB_URI}`);
    await mongoose.connect(process.env.DB_URI);
    console.log(`Connected to DB @ ${process.env.DB_URI}`);
}

main().catch(err => console.log(err));

app.use(`/profile`, profile);
app.use("/", login);
app.use('/register', register);

const server = app.listen(port, () => {
    const SERVERHOST = server.address().address;
    const SERVERPORT = server.address().port;
    console.log(`Server is listening on http://${SERVERHOST}:${SERVERPORT}`);
});

export default server;