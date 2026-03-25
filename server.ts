import express from "express"
import cors from "cors"
import { stocksRouter } from "./src/backend/routes/stockRoutes.ts"
import session from "express-session"
import dotenv from "dotenv"
import { watchListRouter } from "./src/backend/routes/watchListRouter.ts"
import getDBConnection from "./src/backend/db/connect.ts"

dotenv.config()

const app = express()


getDBConnection()


const PORT = process.env.PORT || 3000
const secret = process.env.SECRET_KEY
if (!secret) {
    throw new Error("SECRET_KEY environment variable is not set")
}

app.use(cors())

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

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

app.use("/stocks", stocksRouter)
app.use("/watchlist", watchListRouter)

app.use((req, res) => {
    console.log(req.body)
    res.send("Server here...")
})

app.listen(PORT, () => console.log("Server connected..."))