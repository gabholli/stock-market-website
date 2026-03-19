import { Link } from "react-router";

export default function SignUp() {
    return (
        <main>
            Sign Up
            <p>Already have an account? <Link
                to="/login"
                className="text-blue-500">
                Log In
            </Link>
            </p>
        </main>
    )
}
