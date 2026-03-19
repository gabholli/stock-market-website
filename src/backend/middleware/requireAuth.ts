import type { Request, Response, NextFunction } from 'express'

export default function requireAuth(req: Request, res: Response, next: NextFunction) {
    if (!req.session.id) {
        console.log("Access to protected route blocked")
        return res.status(401).json({ error: "Unauthorized" })
    }

    next()
}