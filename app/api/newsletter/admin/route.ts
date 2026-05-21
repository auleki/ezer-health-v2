import { NextRequest, NextResponse } from "next/server";
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import path from "path";

const DATA_PATH = path.join(process.cwd(), "data", "newsletter-subscribers.json");

function readSubscribers() {
  if (!existsSync(DATA_PATH)) {
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

function authenticate(req: NextRequest): boolean {
  const auth = req.headers.get("authorization");
  if (!auth || !auth.startsWith("Bearer ")) return false;
  const token = auth.slice(7);
  return token === process.env.NEWSLETTER_ADMIN_PASSWORD;
}

// GET — list all subscribers
export async function GET(req: NextRequest) {
  if (!authenticate(req)) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }
  const subscribers = readSubscribers();
  return NextResponse.json({ subscribers, total: subscribers.length });
}

// PUT — add or update a subscriber by id (or add if no id)
export async function PUT(req: NextRequest) {
  if (!authenticate(req)) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { id, email, subscribedAt, source } = body;

    if (!email) {
      return NextResponse.json({ error: "Email is required." }, { status: 400 });
    }

    const subscribers = readSubscribers();

    if (id) {
      // Update existing
      const idx = subscribers.findIndex((s: { id: string }) => s.id === id);
      if (idx === -1) {
        return NextResponse.json({ error: "Subscriber not found." }, { status: 404 });
      }
      subscribers[idx] = {
        ...subscribers[idx],
        email: email.trim().toLowerCase(),
        subscribedAt: subscribedAt || subscribers[idx].subscribedAt,
        source: source || subscribers[idx].source,
      };
    } else {
      // Add new
      subscribers.push({
        id: crypto.randomUUID(),
        email: email.trim().toLowerCase(),
        subscribedAt: subscribedAt || new Date().toISOString(),
        source: source || "admin-portal",
      });
    }

    writeSubscribers(subscribers);
    return NextResponse.json({ message: "Saved.", subscribers });
  } catch (error) {
    console.error("Newsletter PUT error:", error);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}

// DELETE — remove subscriber by id
export async function DELETE(req: NextRequest) {
  if (!authenticate(req)) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "ID is required." }, { status: 400 });
    }

    const subscribers = readSubscribers();
    const filtered = subscribers.filter((s: { id: string }) => s.id !== id);

    if (filtered.length === subscribers.length) {
      return NextResponse.json({ error: "Subscriber not found." }, { status: 404 });
    }

    writeSubscribers(filtered);
    return NextResponse.json({ message: "Deleted.", subscribers: filtered });
  } catch (error) {
    console.error("Newsletter DELETE error:", error);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
