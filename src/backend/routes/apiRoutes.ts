import express from "express"
import getUserList from "../controllers/getUserList"

export const apiRouter = express.Router()

apiRouter.get("/", getUserList)
