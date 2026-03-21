import type { Request, Response } from 'express'
import { cache } from '../cache.ts'
import axios from 'axios'

export default async function getStockList(req: Request, res: Response) {
    const cached = cache.get('stockData')
    if (cached) return res.status(200).json(cached)
    console.log(req.query)

    const response = await axios.get(`https://api.twelvedata.com/quote?symbol=AAPL&apikey=${process.env.DATA_KEY}`)
    const data = await response.data

    cache.set('stockData', data)
    return res.status(200).json(data)
};