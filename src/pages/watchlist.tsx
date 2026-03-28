import axios from "axios"
import { useEffect, useState } from "react"
import Loading from "../components/Loading"
import type { Watchlist } from "../types/types"

export default function WatchList() {
    const [watchlist, setWatchlist] = useState<Watchlist[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        setLoading(true)
        axios.get("https://stock-market-website-wq7x.onrender.com/watchlist/all")
            .then(response => {
                setWatchlist(response.data)
                setLoading(false)
            })
            .catch(error => {
                console.log(error)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <Loading />
    }

    console.log(watchlist)
    const watchlistMa0 = watchlist?.map(item => {
        return (
            <section
                key={item._id}
                className="bg-white flex justify-center flex-col gap-y-4 text-left p-4 md:p-12 
                shadow-xl rounded-xl w-68 h-48 md:w-96"
            >
                <h1>{item.symbol}</h1>
                <p>{item.symbolName}</p>
                <p>{item.exchange}</p>
            </section>
        )
    })

    return (
        <main
            className="flex flex-wrap flex-1 justify-center items-center
                gap-4 my-4">
            {watchlistMa0}
        </main>
    )
}
