import express from "express"
import getStockList from "../controllers/getStockList.ts"
import getTimeSeries from "../controllers/getTimeSeries.ts"

export const stocksRouter = express.Router()

stocksRouter.get("/", getStockList)
stocksRouter.get("/series", getTimeSeries)
