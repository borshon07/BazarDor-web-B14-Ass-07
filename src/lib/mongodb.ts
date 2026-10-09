import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI ?? process.env.MONGODB_URL;

if (!uri) {
  throw new Error(
    "Missing MONGODB_URI (or MONGODB_URL) in .env. Please add your MongoDB connection string.",
  );
}

// Reuse the client across hot reloads in development
// to avoid opening a new connection on every reload.
const globalForMongo = globalThis as unknown as {
  _mongoClient?: MongoClient;
};

export const client = globalForMongo._mongoClient ?? new MongoClient(uri);

if (process.env.NODE_ENV !== "production") {
  globalForMongo._mongoClient = client;
}

export const db = client.db();