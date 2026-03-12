import { Outlet } from "react-router"
import Header from "./Header"

export default function SiteLayout() {
    return (
        <div className="bg-black min-h-dvh text-white font-googlesans">
            <Header />
            <Outlet />
        </div>
    )
}
