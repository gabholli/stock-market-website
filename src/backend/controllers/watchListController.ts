import type { Request, Response } from "express"
import db from "../db/connect.ts"

export async function addToWatchLIst(req: Request, res: Response) {
    const { symbol } = req.body

    console.log("Symbol: ", symbol)
    let watchlist = await db.collection("watchilst")

    let result = await watchlist.insertOne({ symbol })
    res.send(result).status(204)
}