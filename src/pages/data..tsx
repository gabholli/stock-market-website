import axios from "axios"
import { useEffect, useState } from "react"
import type { StockList } from "../types/types"
import Loading from "../components/Loading"

export default function Data() {

    const [stockInfo, setStockInfo] = useState<StockList | null>(null)
    const [timeSeries, setTimeSeries] = useState(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [symbol, setSymbol] = useState("")

    function formAction(formData: FormData) {
        try {
            let value = formData.get("symbolValue") as string
            console.log(value)
            if (!value) return
            setSymbol(value)

        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message)
                setLoading(false)
            }
        }
    }

    useEffect(() => {
        if (!symbol) return
        setLoading(true)
        async function fetchStocks() {
            const stockData = `https://stock-market-website-wq7x.onrender.com/stocks?symbol=${symbol}`
            const series = `https://stock-market-website-wq7x.onrender.com/stocks/series?symbol=${symbol}`
            console.log(stockData)
            const getStocks = axios.get(stockData)
            const getTime = axios.get(series)

            axios.all([getStocks, getTime]).then(
                axios.spread((...allData) => {
                    const stockItem = allData[0].data
                    const timeItem = allData[1].data

                    setStockInfo(stockItem)
                    setTimeSeries(timeItem)
                    console.log(timeSeries)
                    setLoading(false)
                })
            )
        }

        fetchStocks()

    }, [symbol])

    if (loading) {
        return <Loading />
    }

    return (
        <>
            <form
                className="flex flex-col justify-center items-center gap-y-4 mt-8 mb-1"
                action={formAction}
            >
                <label> Symbol Search</label>
                <div className="flex flex-col md:flex-row gap-y-4 gap-x-4">
                    <input
                        name="symbolValue"
                        className="bg-blue-500 text-white indent-4 p-2"
                        type="text"
                        placeholder="Enter symbol...">
                    </input>
                    <button type="submit" className="px-4 py-2 bg-blue-500 text-white cursor-pointer">Search</button>
                </div>
            </form >
            <main className="flex flex-col flex-1 items-center text-center gap-y-8 mt-8">
                {stockInfo && timeSeries && (

                    <section className="bg-white flex flex-col gap-y-2 text-left p-4 md:p-12 shadow-xl">
                        <h1 className="text-lg">{stockInfo?.symbol}</h1>
                        <p className="underline text-lg">{stockInfo?.name}</p>
                        <div className="flex flex-col gap-y-2">
                            {parseInt(stockInfo?.change ?? "0") > 0 ? (
                                <p>Stock Change: ${parseFloat(stockInfo?.change?.substring(1) ?? "N/A").toFixed(2)}</p>
                            ) :
                                <p>Stock Change: -${parseFloat(stockInfo?.change?.substring(1) ?? "N/A").toFixed(2)}</p>
                            }
                            {parseInt(stockInfo?.close ?? "0") > 0 ? (
                                <p>Last Closing Price: ${parseFloat(stockInfo?.close?.substring(1) ?? "N/A").toFixed(2)}</p>
                            ) :
                                <p>Last Closing Price: -${parseFloat(stockInfo?.close?.substring(1) ?? "N/A").toFixed(2)}</p>
                            }
                            <p>Exchange: {stockInfo?.exchange}</p>
                            {parseInt(stockInfo?.high ?? "0") > 0 ? (
                                <p>Highest Price: ${parseFloat(stockInfo?.high?.substring(1) ?? "N/A").toFixed(2)}</p>
                            ) :
                                <p>Highest Price: -${parseFloat(stockInfo?.high?.substring(1) ?? "N/A").toFixed(2)}</p>
                            }
                            {parseInt(stockInfo?.low ?? "0") > 0 ? (
                                <p>Lowest Price: ${parseFloat(stockInfo?.low?.substring(1) ?? "N/A").toFixed(2)}</p>
                            ) :
                                <p>Lowest Price: -${parseFloat(stockInfo?.low?.substring(1) ?? "N/A").toFixed(2)}</p>
                            }
                        </div>
                        <button className="mt-2 px-4 py-2 bg-blue-500 text-white cursor-pointer">Add to watch list</button>
                    </section>
                )}
            </main>
        </>
    )
}
