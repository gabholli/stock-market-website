import type { Request, Response, NextFunction } from 'express'

export default function requireAuth(req: Request, res: Response, next: NextFunction) {
    console.log("Session: ", req.session)
    console.log("userId: ", req.session.userId)
    if (!req.session.userId) {
        console.log("Access to protected route blocked")
        return res.status(401).json({ error: "Unauthorized" })
    }

    next()
}