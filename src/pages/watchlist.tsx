import axios from "axios"
import { useEffect, useState } from "react"
import Loading from "../components/Loading"
import type { Watchlist } from "../types/types"
import { useNavigate } from "react-router"
import { checkAuth } from "../utils/checkAuth"

export default async function WatchList() {
    let navigate = useNavigate()

    const checkAuthValue = await checkAuth()

    const [watchlist, setWatchlist] = useState<Watchlist[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [loggedIn, setLoggedIn] = useState<boolean>(false)

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

    useEffect(() => {
        async function checkLoggedIn() {
            try {
                const response = await axios.get("https://stock-market-website-wq7x.onrender.com/watchlist/auth/me",
                    { withCredentials: true }
                )
                setLoggedIn(response.data.isLoggedIn)

            } catch (error) {
                setLoggedIn(false)
            }

        }

        checkLoggedIn()

    }, [])

    if (loading) {
        return <Loading />
    }

    const watchlistMap = watchlist.sort((a, b) => a.symbol.localeCompare(b.symbol))?.map(item => {
        return (
            <section
                key={item._id}
                className="bg-white flex justify-center flex-col text-left p-4 md:p-12 
                shadow-xl rounded-xl w-68 h-48 md:w-96 hover:cursor-pointer"
            >
                <div
                    onClick={() => navigate("/data", { state: item.symbol })}
                    className="flex flex-col gap-y-4"
                >
                    <h1>{item.symbol}</h1>
                    <p>{item.symbolName}</p>
                    <p>{item.exchange}</p>
                </div>
                <button
                    className="self-end rounded-xl px-4 py-2 bg-blue-500 text-white cursor-pointer hover:bg-blue-400"
                >Remove</button>
            </section>
        )
    })

    return (
        <>
            {watchlistMap.length > 0 && (

                <main
                    className="flex flex-wrap flex-1 justify-center items-center
                gap-4 my-4">

                    {watchlistMap}

                </main>
            )}
            {watchlistMap.length === 0 && (
                <main
                    className="flex flex-wrap flex-1 justify-center items-center
                gap-4 my-4">
                    Add from within website to store stocks!
                </main>
            )}
            {!loggedIn && (
                <div className='flex justify-center items-center text-3xl text-center'>
                    <p>Log in to store your favorite stocks!</p>
                </div>
            )}
        </>
    )
}
