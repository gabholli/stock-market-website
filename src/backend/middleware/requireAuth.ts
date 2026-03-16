export default function requireAuth(req: { session: { userId: any } }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error: string }): any; new(): any } } }, next: () => void) {
    if (!req.session.userId) {
        console.log("Access to protected route blocked")
        return res.status(401).json({ error: "Unauthorized" })
    }

    next()
}