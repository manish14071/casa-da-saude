import express from "express";
import { config } from "dotenv";
import  urlencoded  from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import router from "./Routes/messageRouter.js";
import {errorMiddleware}from "./Middlewares/errorMiddleware.js"

const app = express();
config({ path: "./Config/.env" });

app.use(
  cors({
    origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

app.use("/api/v1/message", router);


app.use(errorMiddleware)

export default app;
