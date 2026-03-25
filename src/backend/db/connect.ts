import mongoose from "mongoose"

export default async function getDBConnection() {
    const uri = process.env.ATLAS_URI

    if (!uri) {
        throw new Error("ATLAS_URL environment variable is not set")
    }

    const safeUri: string = uri

    try {
        await mongoose.connect(safeUri, {
            serverSelectionTimeoutMS: 30000,
            ssl: true,
        })

        console.log("✅ Connected to MongoDB Atlas via Mongoose")
    } catch (err) {
        console.error("❌ MongoDB connection error:", err)
    }
}