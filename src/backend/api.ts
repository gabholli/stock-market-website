import axios from "axios"

const api = axios.create({
    baseURL: "https://stock-market-website-wq7x.onrender.com",
    withCredentials: true
})

export default api