import { Link } from "react-router";

export default function SignUp() {
    return (
        <main className="flex flex-1 justify-center items-center">
            <form className="max-w-md m-auto p-4 md:p-20 flex flex-col gap-y-4 justify-center items-center">
                <h2 className="font-bold">Sign In</h2>
                <div className="flex flex-col py-4">
                    <input
                        className="bg-blue-500 text-white indent-4 p-2 rounded-xl"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                    />
                </div>
                <div className="flex flex-col py-4">
                    <input
                        className="bg-blue-500 text-white indent-4 p-2 rounded-xl"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                    />
                </div>
                <p>
                    Already have an account? <Link className="text-blue-500" to="/login">Sign in</Link>
                </p>
                <button className="hover:bg-blue-400 rounded-xl mt-4 px-4 py-2 bg-blue-500 text-white cursor-pointer">Sign In</button>
                {/* {error && <p className="text-red-600 text-center pt-4">{error}</p>} */}
            </form>
        </main>
    )
}
