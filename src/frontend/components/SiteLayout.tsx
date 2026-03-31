import { Outlet } from "react-router"
import BackToTopButton from "./BackToTopButton"
import HeaderWithHamburger from "./HeaderWithHamburger"

export default function SiteLayout() {
    return (
        <div className="font-googlesans bg-black text-white flex flex-col min-h-dvh">
            <HeaderWithHamburger />
            <Outlet />
            <BackToTopButton />
        </div>
    )
}
