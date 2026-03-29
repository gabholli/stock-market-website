import express from "express"
import cors from "cors"
import { stocksRouter } from "./src/backend/routes/stockRoutes.ts"
import session from "express-session"
import dotenv from "dotenv"
import { watchListRouter } from "./src/backend/routes/watchListRouter.ts"
import { authRouter } from "./src/backend/routes/authRoutes.ts"
import { meRouter } from "./src/backend/routes/meRoutes.ts"
import MongoStore from "connect-mongo"

dotenv.config()

const app = express()

const PORT = process.env.PORT || 3000
const secret = process.env.SECRET_KEY
const mongoUri = process.env.ATLAS_URI

if (!secret) {
    throw new Error("SECRET_KEY environment variable is not set")
}

if (!mongoUri) {
    throw new Error("ATLAS_URI environment variable is not setz")
}

app.use(cors())

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.use(session({
    secret: secret,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: mongoUri
    }),
    cookie: {
        httpOnly: true,
        secure: false,
        sameSite: "lax"
    }

}))

app.use("/stocks", stocksRouter)
app.use("/auth/me", meRouter)
app.use("/auth", authRouter)
app.use("/watchlist", watchListRouter)

app.use((req, res) => {
    console.log(req.body)
    res.send("Server here...")
})

app.listen(PORT, () => console.log("Server connected..."))