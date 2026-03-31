import { NavLink } from "react-router";
import { UserAuth } from "../context/AuthContext";
import api from "../../backend/api";
import toast from "react-hot-toast";
import { Menu } from '@boxicons/react';
import { useState } from "react";

export default function HeaderWithHamburger() {

    const { loggedIn, setLoggedIn } = UserAuth()
    const [isOpen, setIsOpen] = useState<boolean>(false)

    function handleSignOut() {
        api.get("/auth/logout")
            .then(response => {
                console.log(response.data)
                setLoggedIn(false)
                toast.success("Logged out successfully!")
            })
            .catch(error => {
                console.error(error)
                toast.error("Error logging out.")
            })
    }

    return (
        <header className="flex justify-between items-center
            text-white py-6 px-8 md:px-16 xl:px-32 border-b-2 border-white text-center">
            <section className="p-2">
                <h1 className="text-xl md:text-4xl font-extrabold">Stock Pulse</h1>
            </section>
            <nav className="hidden lg:flex items-center gap-12
                    font-semibold md:text-3xl">
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
                {loggedIn ? (
                    <button
                        className="cursor-pointer"
                        onClick={handleSignOut}
                    >
                        Sign Out
                    </button>
                ) : null}
            </nav>

            <div
                onClick={() => setIsOpen(open => !open)}
                className="lg:hidden block cursor-pointer">
                <Menu />
            </div>

            <div className={`absolute xl:hidden top-24
                    left-0 w-full bg-neutral-900
                    flex-col items-center gap-6 font-semibold
                    transform transition-transform
                    ${isOpen ? "flex" : "hidden"}`}>
                <nav className="w-full text-center
                        p-4 hover:bg-neutral-800 transition-all
                        cursor-pointer flex flex-col gap-y-6">
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
                    {loggedIn ? (
                        <button
                            className="cursor-pointer"
                            onClick={handleSignOut}
                        >
                            Sign Out
                        </button>
                    ) : null}
                </nav>
            </div>
        </header>
    )
}
