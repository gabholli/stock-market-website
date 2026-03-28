import { Outlet } from "react-router"
import Header from "./Header"
import BackToTopButton from "./BackToTopButton"

export default function SiteLayout() {
    return (
        <div className="font-googlesans bg-gray-200 flex flex-col min-h-dvh">
            <Header />
            <BackToTopButton />
            <Outlet />
        </div>
    )
}
