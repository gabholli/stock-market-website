import axios from "axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";

export default function SignUp() {

    const navigate = useNavigate()

    function signUpSubmit(formData: FormData) {
        try {
            let emailValue = formData.get("email") as string
            let passwordValue = formData.get("password") as string
            if (!emailValue || !passwordValue) return
            axios.post("https://stock-market-website-wq7x.onrender.com/auth/register",
                { email: emailValue, password: passwordValue }
            )
            console.log(emailValue)
            console.log(passwordValue)
            toast.success("You are signed up!")
            navigate("/")

        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message)
                toast.error("Error signing up.")
            }
        }
    }

    return (
        <main className="flex flex-1 justify-center items-center">
            <form
                className="max-w-md m-auto p-4 md:p-20 flex flex-col gap-y-4 justify-center items-center"
                action={signUpSubmit}
            >
                <h2 className="font-bold">Sign Up</h2>
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
