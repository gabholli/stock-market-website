import { Outlet } from "react-router"
import Header from "./Header"

export default function SiteLayout() {
    return (
        <div className="font-googlesans flex flex-col min-h-dvh">
            <Header />
            <Outlet />
        </div>
    )
}
