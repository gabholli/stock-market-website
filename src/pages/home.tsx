import { NavLink } from "react-router"

const Home = () => {
    return (
        <>
            <nav>
                <NavLink to="/" end>
                    Home
                </NavLink>
                <NavLink to="about" end>
                    About
                </NavLink>
            </nav>
            <div>home</div>

        </>
    )
}

export default Home