import express from "express"
import cors from "cors"
import { stocksRouter } from "./src/backend/routes/stockRoutes.ts"
import session from "express-session"
import dotenv from "dotenv"
import apicache from "apicache"

const app = express()
let cache = apicache.middleware

dotenv.config()

const PORT = process.env.PORT || 3000
const secret = process.env.SECRET_KEY
if (!secret) {
    throw new Error("SECRET_KEY environment variable is not set")
}

app.use(cors())

app.use(express.json())

app.use(session({
    secret: secret,
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: false,
        sameSite: "lax"
    }

}))

app.use("/stocks", cache("5 minutes"), stocksRouter)

app.use((req, res) => {
    console.log(req.body)
    res.send("Server here...")
})

app.listen(PORT, () => console.log("Server connected..."))