import { NavLink } from "react-router"

const Header = () => {
    return (
        <>
            <nav className="flex items-center justify-center lg:justify-end lg:mr-24 gap-x-8 p-4 md:p-8
                shadow-md md:text-3xl 2xl:text-4xl text-center">
                <NavLink to="/" end>
                    Home
                </NavLink>
                <NavLink to="data" end>
                    Data
                </NavLink>
                <NavLink to="watchlist" end>
                    Watch List
                </NavLink>
                <NavLink to="login" end>
                    Log In / Sign Up
                </NavLink>
            </nav>
            <hr></hr>
        </>
    )
}

export default Header