import type { Request, Response } from 'express'
import { myCache } from "../../../server"

export default async function getStockList(req: Request, res: Response) {
    const cached = myCache.get('stockData')
    if (cached) return res.status(200).json(cached)
    console.log(req.query)

    const response = await fetch(`https://api.twelvedata.com/price?symbol=AAPL&apikey=${process.env.DATA_KEY}`)
    const data = await response.json()

    myCache.set('stockData', data)
    return res.status(200).json(data)
};