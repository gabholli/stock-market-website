import express from "express"
import getUserList from "../controllers/getUserList.ts"

export const apiRouter = express.Router()

apiRouter.get("/", getUserList)
