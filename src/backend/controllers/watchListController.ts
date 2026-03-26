import type { Request, Response } from "express"
import db from "../db/connect"

export async function addToWatchList(req: Request, res: Response) {
    // const namePassedIn = { symbolName: req.params.symbolName }
    const { symbol } = req.body
    const updates = {
        symbolName: symbol
    }
    console.log(symbol)
    let watchlist = await db.collection("watchlist")
    // let result = await watchlist.createIndex({ symbol: 1, exchange: 1, symbolName: 1 }, { unique: true })
    let result = await watchlist.updateOne(symbol, updates, { upsert: true })
    // let result = await watchlist.insertOne(symbol)
    res.send(result).status(204)
}