import express from "express";
import http from "http";
import { signupController } from "./controllers/signupController.js";
import cors from "cors";
const app = express();
app.use(express.json());

const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

app.post("/signup", signupController);



export default app;
