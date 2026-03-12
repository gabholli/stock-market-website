import { NavLink } from "react-router"

const Header = () => {
    return (
        <>
            <nav className="flex justify-center lg:justify-end lg:mr-24 gap-x-8 p-4 md:p-8
                shadow-md text-lg md:text-3xl 2xl:text-5xl">
                <NavLink to="/" end>
                    Home
                </NavLink>
                <NavLink to="data" end>
                    Data
                </NavLink>
                <NavLink to="/" end>
                    Watch List
                </NavLink>
            </nav>
            <hr></hr>
        </>
    )
}

export default Header