import { MongoClient } from "mongodb";

const uri = process.env.ATLAS_URI;
if (!uri) {
    throw new Error("ATLAS_URI is not set in environment variables");
}

const connectionUri: string = uri;

let client: MongoClient | null = null;

export async function getDB() {
    if (!client) {
        client = new MongoClient(connectionUri, {
            tls: true,
            tlsAllowInvalidCertificates: false,
            serverSelectionTimeoutMS: 30000,
        });

        await client.connect();
        console.log("✅ Connected to MongoDB Atlas");
    }

    return client.db("stock_pulse");
}