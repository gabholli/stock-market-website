import axios from "axios"
import { useEffect, useState } from "react"
import type { StockList } from "../types/types"

export default function Data() {

    const [stockInfo, setStockInfo] = useState<StockList>([])

    useEffect(() => {
        async function fetchStocks() {
            const response = await axios.get("https://stock-market-website-wq7x.onrender.com/stocks")
            const stockData = response.data
            console.log(stockData)
            setStockInfo(stockData)
        }

        fetchStocks()

    }, [])

    return (
        <>
            <main>
                <p>{stockInfo.price}</p>
            </main>
        </>
    )
}
