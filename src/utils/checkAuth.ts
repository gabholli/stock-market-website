import api from "../backend/api"

export async function checkAuth() {
    try {
        const res = await api.get("/auth/me",
            { withCredentials: true }
        )

        const user = res.data
        if (!user.isLoggedIn) {
            return false
        }
        return user.email

    } catch (err) {
        console.log(err, 'Auth check failed')
        return false
    }
}