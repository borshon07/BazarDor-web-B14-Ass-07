import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI ?? process.env.MONGODB_URL;

if (!uri) {
  throw new Error(
    ".env e MONGODB_URI (ba MONGODB_URL) nei, connection string boshao",
  );
}

// dev e hot reload er shomoy bar bar notun connection na khular jonno
const globalForMongo = globalThis as unknown as {
  _mongoClient?: MongoClient;
};

export const client = globalForMongo._mongoClient ?? new MongoClient(uri);

if (process.env.NODE_ENV !== "production") {
  globalForMongo._mongoClient = client;
}

export const db = client.db();