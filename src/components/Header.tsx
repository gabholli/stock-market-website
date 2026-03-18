import { NavLink } from "react-router"

export default function Header() {
    return (
        <>
            <main className="bg-blue-500 text-white flex flex-col lg:flex-row pt-4 md:pt-0 md:mt-0 justify-between items-center lg:pl-24">
                <section className="lg:p-8 md:pt-6">
                    <h1 className="text-xl md:text-4xl font-extrabold">Stock Pulse</h1>
                </section>
                <nav className="flex items-center justify-center lg:justify-end lg:pr-24 gap-x-8 p-4 md:p-6 lg:p-8
                shadow-md md:text-3xl 2xl:text-3xl text-center">
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
            </main>
            <hr></hr>
        </>
    )
}
