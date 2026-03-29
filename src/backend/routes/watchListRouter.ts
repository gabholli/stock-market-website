import express from "express"
import { addToWatchLIst, deleteWatchlistItem, getAll } from "../controllers/watchListController.ts"
// import requireAuth from "../middleware/requireAuth.ts"

export const watchListRouter = express.Router()

watchListRouter.post("/", addToWatchLIst)
watchListRouter.get("/all", getAll)
watchListRouter.delete("/:symbol", deleteWatchlistItem)