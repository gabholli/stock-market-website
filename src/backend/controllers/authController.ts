import type { Request, Response } from "express"
import validator from 'validator'
import bcrypt from 'bcryptjs'
import db from "../db/connect.ts"

export async function registerUser(req: Request, res: Response) {
    let { email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({ error: "All fields are required" })
    }

    email = email.trim()

    if (!validator.isEmail(email)) {
        return res.status(400).json({ error: "invalid email format" })
    }

    try {
        let users = await db.collection("users")
        let result = await users
            .findOne({ email, password })

        if (result) {
            return res.status(400).json({ error: "Email or password already in use." })
        }

        const hashed = await bcrypt.hash(password, 10)

        const insertResult = await users.updateOne(
            {
                email

            },
            {
                $set: {
                    password: hashed
                }
            },
            { upsert: true }
        )

        req.session.userId = insertResult._id

        res.status(201).json({ message: "User registered." })
    } catch (error) {
        if (error instanceof Error) {
            console.error("Registration error:", error.message)
            res.status(500).json({ error: "Registration failed. Please try again." })
        }
    }
}

export async function loginUser(req: Request, res: Response) {
    let { email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({ error: "All fields are required." })
    }

    email = email.trim()

    try {
        const users = await db.collection("users")
        let result = await users
            .findOne({ email })

        if (!result) {
            return res.status(401).json({ error: "Invalid credentials." })
        }

        const isValid = await bcrypt.compare(password, result.password)

        if (!isValid) {
            return res.status(401).json({ error: "Invalid credentials." })
        }

        req.session.userId = result._id
        res.json({ message: "Logged in." })

    } catch (error) {
        if (error instanceof Error) {
            console.error("Login error: ", error.message)
            res.status(500).json({ error: "Login failed. Please try again." })
        }

    }

}


export async function logoutUser(req: Request, res: Response) {
    req.session.destroy(() => {
        res.json({ message: "Logged out." })
    })
}