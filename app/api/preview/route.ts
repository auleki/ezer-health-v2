import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)

    const secret = searchParams.get("secret")
    const url = searchParams.get("url")
    const status = searchParams.get("status")
    const draft = await draftMode();

    if (!secret || !url || !status) {
        return new Response("Invalid request", { status: 400 })
    }

    if (secret !== process.env.PREVIEW_SECRET) {
        return new Response("Invalid secret", { status: 401 })
    }

    if (status == "published") {
        draft.disable()
    } else {
        draft.enable()
    }

    return redirect(url || "/")
}