import axios from "axios"

export async function checkAuth() {
    try {
        const res = await axios.get("https://stock-market-website-wq7x.onrender.com/auth/me")

        const user = res.data
        if (!user.isLoggedIn) {
            return false
        }
        return user.name

    } catch (err) {
        console.log(err, 'Auth check failed')
        return false
    }
}