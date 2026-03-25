import { MongoClient } from "mongodb";

export default async function getDBConnection() {

    const db = process.env.ATLAS_URI
    if (!db) throw new Error("ATLAS_URI environment variable is not set")
    const client = new MongoClient(db)
    console.log("Connected to database")
    await client.connect()
}