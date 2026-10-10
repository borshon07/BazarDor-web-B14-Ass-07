import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

export async function GET() {
  const uri = process.env.MONGODB_URI ?? process.env.MONGODB_URL;

  const env = {
    BETTER_AUTH_URL: process.env.BETTER_AUTH_URL ?? null,
    BETTER_AUTH_SECRET: !!process.env.BETTER_AUTH_SECRET,
    MONGODB_URI: !!uri,
    GOOGLE_CLIENT_ID: !!process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: !!process.env.GOOGLE_CLIENT_SECRET,
    GITHUB_CLIENT_ID: !!process.env.GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET: !!process.env.GITHUB_CLIENT_SECRET,
  };

  if (!uri) {
    return NextResponse.json({ env, db: "MONGODB_URI nei" });
  }

  const afterAt = uri.split("@").pop() ?? "";
  const info = {
    username: uri.replace(/^mongodb(\+srv)?:\/\//, "").split(":")[0],
    atSignCount: (uri.match(/@/g) ?? []).length,
    hostAndRest: afterAt,
    hasSpaceOrQuote: /[\s"']/.test(uri),
  };

  try {
    const client = new MongoClient(uri, { serverSelectionTimeoutMS: 5000 });
    try {
      await client.connect();
      await client.db().command({ ping: 1 });
      return NextResponse.json({ env, db: "ok", info });
    } finally {
      await client.close();
    }
  } catch (err) {
    return NextResponse.json({
      env,
      db: "FAILED",
      error: err instanceof Error ? err.message : String(err),
      info,
    });
  }
}