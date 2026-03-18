import axios from "axios"
import { useEffect, useState } from "react"
import type { StockList } from "../types/types"

export default function Data() {

    const [stockInfo, setStockInfo] = useState<StockList | null>(null)

    useEffect(() => {
        async function fetchStocks() {
            const response = await axios.get<StockList>("https://stock-market-website-wq7x.onrender.com/stocks")
            const stockData = response.data
            console.log(stockData)
            setStockInfo(stockData)
        }

        fetchStocks()

    }, [])

    return (
        <>
            <form className="flex flex-col justify-center items-center gap-y-2 mt-8" role="search">
                <label>Symbol Search</label>
                <input className="bg-zinc-500 text-white indent-4 p-2" type="text" placeholder="Enter symbol...">
                </input>
            </form>
            <main className="flex flex-col flex-1 items-center text-center gap-y-8 mt-8">

                <section className="flex flex-col gap-y-2 border-black border-2 p-4 shadow-md">
                    <h1 className="text-center">{stockInfo?.symbol}</h1>
                    <p className="underline">{stockInfo?.name}</p>
                    <p>Stock Change: ${parseFloat(stockInfo?.change ?? "N/A").toFixed(2)}</p>
                    <p>Last Closing Price: ${parseFloat(stockInfo?.close ?? "N/A").toFixed(2)}</p>
                    <p>Exchange: {stockInfo?.exchange}</p>
                    <p>Highest Price: ${parseFloat(stockInfo?.high ?? "N/A").toFixed(2)}</p>
                    <p>Lowest Price: ${parseFloat(stockInfo?.low ?? "N/A").toFixed(2)}</p>

                </section>
            </main>
        </>
    )
}
