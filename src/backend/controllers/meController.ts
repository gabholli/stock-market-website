import type { Request, Response } from "express"
import db from "../db/connect.ts"

export async function getCurrentUser(req: Request, res: Response) {
    try {
        const userId = req.session.userId
        const database = await db.collection("users")

        if (!req.session.userId) {

            return res.json({ isLoggedIn: false })

        }

        let results = await database.collection
            .find({ userId })
            .toArray()

        res.json({ isLoggedIn: true, name: results.email })

    } catch (err) {
        console.error('getCurrentUser error:', err)
        res.status(500).json({ error: 'Internal server error' })
    }
} 