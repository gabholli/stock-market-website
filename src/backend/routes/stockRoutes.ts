import express from "express"
import getStockList from "../controllers/getStockList.ts"

export const stocksRouter = express.Router()

stocksRouter.get("/", getStockList)
