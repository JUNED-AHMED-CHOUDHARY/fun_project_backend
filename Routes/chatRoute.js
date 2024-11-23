import express from "express"
import { chatGptController } from "../Controllers/chatGpt.js"

const router = express.Router()
router.post("/chatgpt", chatGptController)

export default router