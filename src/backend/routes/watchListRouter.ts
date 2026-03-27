import express from "express"
import { addToWatchLIst, getAll } from "../controllers/watchListController.ts"

export const watchListRouter = express.Router()

watchListRouter.post("/", addToWatchLIst)
watchListRouter.get("/all", getAll)