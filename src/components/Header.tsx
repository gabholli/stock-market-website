import { NavLink } from "react-router"

const Header = () => {
    return (
        <>
            <nav className="flex justify-center md:justify-end md:mr-24 gap-x-8 p-4
                shadow-md text-lg">
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