import express from "express"
import { getStockList, getTimeSeries } from "../controllers/stockController.ts"

export const stocksRouter = express.Router()

stocksRouter.get("/", getStockList)
stocksRouter.get("/series", getTimeSeries)
