import axios from "axios";
import type { Response } from "express";

export default async function getStockList(res: Response) {
    try {
        const response = await axios.get(`https://api.twelvedata.com/price?symbol=AAPL&apikey=${process.env.DATA_KEY}`)
        console.log(response.data)

        res.status(200).json(response.data)
    } catch (err) {
        res.status(400).send(err)
    }
}