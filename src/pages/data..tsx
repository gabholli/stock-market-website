import axios from "axios"
import { useEffect, useState } from "react"
import type { StockList } from "../types/types"

export default function Data() {

    const [stockInfo, setStockInfo] = useState<StockList | null>(null)
    const [loading, setLoading] = useState<Boolean>(false)

    useEffect(() => {
        setLoading(true)
        async function fetchStocks() {
            const response = await axios.get<StockList>("https://stock-market-website-wq7x.onrender.com/stocks")
            const stockData = response.data
            console.log(stockData)
            setStockInfo(stockData)
            setLoading(false)
        }

        fetchStocks()

    }, [])

    if (loading) {
        return (
            <div className="flex flex-col flex-1 justify-center items-center text-center">
                <h1>Loading...</h1>
            </div>
        )
    }

    return (
        <>
            <form className="flex flex-col justify-center items-center gap-y-2 mt-8" role="search">
                < label > Symbol Search</label >
                <input className="bg-blue-500 text-white indent-4 p-2" type="text" placeholder="Enter symbol...">
                </input>
            </form >
            <main className="flex flex-col flex-1 items-center text-center gap-y-8 mt-8">

                <section className="flex flex-col gap-y-2 border-black border-2 p-4 shadow-md">
                    <h1 className="text-center">{stockInfo?.symbol}</h1>
                    <p className="underline">{stockInfo?.name}</p>
                    <p>Stock Change: ${parseFloat(stockInfo?.change ?? "N/A").toFixed(2)}</p>
                    <p>Last Closing Price: ${parseFloat(stockInfo?.close ?? "N/A").toFixed(2)}</p>
                    <p>Exchange: {stockInfo?.exchange}</p>
                    <p>Highest Price: ${parseFloat(stockInfo?.high ?? "N/A").toFixed(2)}</p>
                    <p>Lowest Price: ${parseFloat(stockInfo?.low ?? "N/A").toFixed(2)}</p>
                    <button className="px-4 py-2 bg-blue-500 text-white">Add to watch list</button>
                </section>
            </main>
        </>
    )
}
