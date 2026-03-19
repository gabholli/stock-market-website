import { Link } from "react-router";

export default function LogIn() {
    return (
        <main>Login

            <p>No account yet? <Link
                className="text-blue-500"
                to="/signup">
                Sign Up
            </Link>
            </p>
        </main>
    )
}
