import express from "express"
import cors from "cors"
import { apiRouter } from "./src/backend/routes/apiRoutes.ts"

const PORT = process.env.PORT || 3000

const app = express()

app.use(cors())

app.use("/users", apiRouter)

app.use((req, res) => {
    res.send("Server here...")
})

app.listen(PORT, () => console.log("Server connected..."))