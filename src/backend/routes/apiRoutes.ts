import express from "express"
import getStockList from "../controllers/getStockList.ts"

export const apiRouter = express.Router()

apiRouter.get("/", getStockList)
