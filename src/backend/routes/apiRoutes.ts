import express from "express"
import getStockList from "../controllers/getUserList.ts"

export const apiRouter = express.Router()

apiRouter.get("/", getStockList)
