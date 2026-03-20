import type { Request, Response } from 'express'
import { cache } from '../cache.ts'

export default async function getTimeSeries(req: Request, res: Response) {
    const cached = cache.get('timeSeries')
    if (cached) return res.status(200).json(cached)
    console.log(req.query)

    const response = await fetch(`https://api.twelvedata.com/time_series?symbol=AAPL&interval=1min&apikey=${process.env.DATA_KEY}`)
    const data = await response.json()

    cache.set('timeSeries', data)
    return res.status(200).json(data)
};