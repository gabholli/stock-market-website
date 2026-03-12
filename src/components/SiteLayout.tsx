import { Outlet } from "react-router"
import Header from "./Header"

export default function SiteLayout() {
    return (
        <div className="font-googlesans">
            <Header />
            <Outlet />
        </div>
    )
}
