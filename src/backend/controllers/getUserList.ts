export default function getStockList(req: { query: any }, res: { send: (arg0: string) => void }) {
    console.log(req.query)
    res.send("User list")
}