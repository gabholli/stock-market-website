import axios from "axios"
import { useEffect, useState } from "react"
import Loading from "../components/Loading"

export default function WatchList() {
    const [watchlist, setWatchlist] = useState([])
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        setLoading(true)
        axios.get("https://stock-market-website-wq7x.onrender.com/watchlist/all")
            .then(response => {
                console.log(response.data)
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

    return (
        <div>Watch List</div>
    )
}
