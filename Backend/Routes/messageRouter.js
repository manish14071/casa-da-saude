import express from "express";
import { getMessage, sendMessage } from "../controllers/messageController.js";
import {isAdminAuthenticated} from "../Middlewares/auth.js"

const router = express.Router();

router.post("/send", sendMessage);
router.get("/getall",isAdminAuthenticated ,getMessage);

export default router;
