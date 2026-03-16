import express from "express"
import cors from "cors"
import { apiRouter } from "./src/backend/routes/apiRoutes.ts"
import session from "express-session"

const PORT = process.env.PORT || 3000
const secret = process.env.SESSION_SECRET
if (!secret) {
    throw new Error("SECRET_KEY environment variable is not set")
}

const app = express()

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

app.use("/users", apiRouter)

app.use((req, res) => {
    console.log(req.query)
    res.send("Server here...")
})

app.listen(PORT, () => console.log("Server connected..."))