import express from "express"

export const apiRouter = express.Router()

apiRouter.get("/", (req, res) => {
    console.log(req.query)
    res.send("user list")
})

