import express from "express"
import { addToWatchList } from "../controllers/watchListController.ts"

export const watchListRouter = express.Router()

watchListRouter.post("/", addToWatchList)
