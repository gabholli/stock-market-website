import type { Request, Response } from "express"
import db from "../db/connect.ts"

export async function addToWatchLIst(req: Request, res: Response) {
    const { symbol, symbolName, exchange } = req.body

    let watchlist = await db.collection("watchlist")

    let result = await watchlist.insertOne({ symbol, symbolName, exchange })
    res.send(result).status(204)
}