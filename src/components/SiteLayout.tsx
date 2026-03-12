import { Outlet } from "react-router"
import Header from "./Header"

const SiteLayout = () => {
    return (
        <div className="bg-black min-h-dvh text-white font-googlesans">
            <Header />
            <Outlet />
        </div>
    )
}

export default SiteLayout