import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";

import { profile } from "./src/routes/profile.route.js";
config();

const app = express();
config({ path: `.env.${process.env.NODE_ENV}` });

const port = process.env.PORT;
// const host = process.env.HOST;

const main = async () => {
  console.log(`Connecting to DB @ ${process.env.DB_URI}`);
  await mongoose.connect(process.env.DB_URI);
  console.log(`Connected to DB @ ${process.env.DB_URI}`);
};

main().catch((err) => console.log(err));

app.use(`/`, profile);

const server = app.listen(port, () => {
  const SERVERHOST = server.address().address;
  const SERVERPORT = server.address().port;
  console.log(`Server is listening on http://${SERVERHOST}:${SERVERPORT}`);
});

export default server;
