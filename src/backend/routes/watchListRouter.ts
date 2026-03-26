import express from "express"
import { addToWatchLIst } from "../controllers/watchListController.ts"

export const watchListRouter = express.Router()

watchListRouter.post("/", addToWatchLIst)
