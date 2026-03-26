import type { Request, Response } from "express"
import db from "../db/connect"

export async function addToWatchLIst(req: Request, res: Response) {
    let watchlist = await db.collection("watchilst")
    let newWatchlistItem = req.body

    let result = await watchlist.insertOne(newWatchlistItem.symbol)
    res.send(result).status(204)
}