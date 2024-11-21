import express from "express"
import cors from "cors"
import helmet from "helmet"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"

dotenv.config()
const app = express()

const corsOptions = {
    origin: "https://fun-project-frontend-269ld8cot-juned-ahmed-choudharys-projects.vercel.app",
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

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})
