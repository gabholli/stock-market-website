import axios from "axios";
import type { Request, Response } from "express";

export default async function getStockList(req: Request, res: Response) {
    try {
        const response = await axios.get(`https://api.twelvedata.com/price?symbol=AAPL&apikey=${process.env.DATA_KEY}`)
        console.log(response.data)
        console.log(req.body)

        res.status(200).json(response.data)
    } catch (err) {
        res.status(400).send(err)
    }
}