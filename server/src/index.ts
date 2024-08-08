// YBpYjjZZQlOXNKvm

import express, { Express } from "express";
import mongoose from "mongoose";
import ingodoRoutes from "./routes/ingodoRoutes";

import cors from "cors";

const app: Express = express();

const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors);

const mongoURL: string =
  "mongodb+srv://irabruce20:YBpYjjZZQlOXNKvm@e-ngodo.vkm3zlo.mongodb.net/";

mongoose
  .connect(mongoURL)
  .then(() => console.log("Connected"))
  .catch((err) => console.log("Failed to connect to MGD", err));

app.use("/finacial", ingodoRoutes);

app.listen(port, () => console.log(`Server listening on ${port}`));
