import type { Request, Response } from 'express'
import { cache } from '../cache.ts'
import axios from 'axios'

export default async function getStockList(req: Request, res: Response) {
    const { symbol } = req.query

    if (!symbol) return res.status(400).json({ error: "Symbol is required" })

    const cacheKey = `stockData_${symbol}`
    const cached = cache.get(cacheKey)
    if (cached) return res.status(200).json(cached)

    const response = await axios.get(`https://api.twelvedata.com/quote?symbol=${symbol}&apikey=${process.env.DATA_KEY}`)
    const data = await response.data

    cache.set(cacheKey, data)
    return res.status(200).json(data)
};