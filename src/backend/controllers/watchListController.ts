import type { Request, Response } from "express"
import db from "../db/connect.ts"

export async function addToWatchLIst(req: Request, res: Response) {
    const { symbol, symbolName, exchange } = req.body

    let watchlist = await db.collection("watchlist")

    let result = await watchlist.updateOne(
        {
            symbol,
        },
        {
            $set: {
                symbolName,
                exchange
            }
        },
        { upsert: true }
    )
    res.status(200).json({
        inserted: result.upsertedCount > 0
    })
}

export async function getAll(_req: Request, res: Response) {
    let collection = await db.collection("watchlist")
    let results = await collection.find({})
        .toArray()
    res.send(results).status(200)
}