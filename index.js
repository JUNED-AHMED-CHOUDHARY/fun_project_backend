import express from "express"
import cors from "cors"
import helmet from "helmet"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import chatRoute from "./Routes/chatRoute.js"

dotenv.config()
const app = express()

const corsOptions = {
    origin: process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://fun-project-frontend.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}

app.use(cors(corsOptions))
app.use(helmet())
app.use(cookieParser())

app.use(express.json())


app.get("/", (req, res, next) => {
    return res.json("Hello World")
})

app.use("/", chatRoute)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})
