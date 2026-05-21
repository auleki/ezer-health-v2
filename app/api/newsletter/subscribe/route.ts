import { NextRequest, NextResponse } from "next/server";
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import path from "path";

const DATA_PATH = path.join(process.cwd(), "data", "newsletter-subscribers.json");

function readSubscribers() {
  if (!existsSync(DATA_PATH)) {
    mkdirSync(path.dirname(DATA_PATH), { recursive: true });
    writeFileSync(DATA_PATH, "[]", "utf-8");
    return [];
  }
  try {
    return JSON.parse(readFileSync(DATA_PATH, "utf-8"));
  } catch {
    return [];
  }
}

function writeSubscribers(data: unknown[]) {
  mkdirSync(path.dirname(DATA_PATH), { recursive: true });
  writeFileSync(DATA_PATH, JSON.stringify(data, null, 2), "utf-8");
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Valid email is required." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const subscribers = readSubscribers();
    const normalized = email.trim().toLowerCase();

    const alreadyExists = subscribers.some(
      (s: { email: string }) => s.email.toLowerCase() === normalized
    );

    if (alreadyExists) {
      return NextResponse.json({ message: "Already subscribed." }, { status: 200 });
    }

    subscribers.push({
      id: crypto.randomUUID(),
      email: normalized,
      subscribedAt: new Date().toISOString(),
      source: "blog-newsletter",
    });

    writeSubscribers(subscribers);

    return NextResponse.json({ message: "Subscribed successfully." }, { status: 201 });
  } catch (error) {
    console.error("Newsletter subscribe error:", error);
    return NextResponse.json({ error: "Server error. Please try again." }, { status: 500 });
  }
}
