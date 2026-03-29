import express from "express"
import { addToWatchLIst, deleteWatchlistItem, getAll } from "../controllers/watchListController.ts"
import requireAuth from "../middleware/requireAuth.ts"

export const watchListRouter = express.Router()

watchListRouter.post("/", requireAuth, addToWatchLIst)
watchListRouter.get("/all", requireAuth, getAll)
watchListRouter.delete("/:symbol", requireAuth, deleteWatchlistItem)