import type { Request, Response } from "express"
import db from "../db/connect.ts"

export async function addToWatchLIst(req: Request, res: Response) {
    const { symbol, symbolName, exchange } = req.body

    let watchlist = await db.collection("watchlist")

    let result = await watchlist.updateOne({ symbol, symbolName, exchange }, { upsert: true })
    res.send(result).status(204)
}