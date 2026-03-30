import type { Request, Response } from "express"
import db from "../db/connect.ts"
import { ObjectId } from "mongodb"

export async function getCurrentUser(req: Request, res: Response) {
    try {
        if (!req.session.userId) {
            return res.json({ isLoggedIn: false })
        }
        const userId = req.session.userId
        const database = await db.collection("users")



        let user = await database
            .findOne({ _id: new ObjectId(userId) })

        if (!user) {
            return res.json({ isLoggedIn: false })
        }

        res.json({ isLoggedIn: true, email: user.email })

    } catch (err) {
        console.error('getCurrentUser error:', err)
        res.status(500).json({ error: 'Internal server error' })
    }
} 