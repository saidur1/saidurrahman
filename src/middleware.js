import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const path = request.nextUrl.pathname;
    const isAccess = request.cookies.get("prospect");

    if (path === "/free-training/content" && !isAccess) {
        return NextResponse.redirect(new URL("/free-training", request.url));
    } else if (path === "/free-training" && isAccess) {
        return NextResponse.redirect(
            new URL("/free-training/content", request.url)
        );
    } else if (path == "/community") {
        return NextResponse.redirect("https://discord.gg/uxfQY7HmQS");
    } else if (path === "/admin") {
        return NextResponse.redirect(`${process.env.baseURL}`);
    } else {
        return NextResponse.next();
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        "/",
        "/free-training",
        "/free-training/content",
        "/community",
        "/admin",
    ],
};
