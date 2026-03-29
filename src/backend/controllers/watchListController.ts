import type { Request, Response } from "express"
import db from "../db/connect.ts"

declare module "express-session" {
    interface SessionData {
        userId?: string
    }
}

export async function addToWatchLIst(req: Request, res: Response) {

    const userId = req.session.userId
    const { symbol, symbolName, exchange } = req.body

    let watchlist = await db.collection("watchlist")

    let result = await watchlist.updateOne(
        {
            symbol,
            userId
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
    const userId = req.session.userID
    let collection = await db.collection("watchlist")
    let results = await collection.find({})
        .find(userId)
        .toArray()
    res.send(results).status(200)
}