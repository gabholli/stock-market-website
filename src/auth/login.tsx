import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";

export default function LogIn() {

    const navigate = useNavigate()

    function loginSubmit(formData: FormData) {
        try {
            let email = formData.get("email") as string
            let password = formData.get("password") as string
            if (!email || !password) return
            console.log(email)
            console.log(password)
            toast.success("You are logged in!")
            navigate("/")

        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message)
                toast.error("Error logging in.")
            }
        }
    }

    return (
        <main className="flex flex-1 justify-center items-center">
            <form
                className="max-w-md m-auto p-4 md:p-20 flex flex-col gap-y-4 justify-center items-center"
                action={loginSubmit}
            >
                <h2 className="font-bold">Sign In</h2>
                <div className="flex flex-col py-4">
                    <input
                        className="bg-blue-500 text-white indent-4 p-2 rounded-xl"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        required
                    />
                </div>
                <div className="flex flex-col py-4">
                    <input
                        className="bg-blue-500 text-white indent-4 p-2 rounded-xl"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        required
                    />
                </div>
                <p>
                    Don't have an account yet? <Link className="text-blue-500" to="/signup">Sign up</Link>
                </p>
                <button className="hover:bg-blue-400 rounded-xl mt-4 px-4 py-2 bg-blue-500 text-white cursor-pointer">Sign In</button>
                {/* {error && <p className="text-red-600 text-center pt-4">{error}</p>} */}
            </form>
        </main>
    )
}
