import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

const tokenVerify = async (token) => {
    // if token is expired
    try {
        const key = new TextEncoder().encode(process.env.JWT_SECRET);

        // if token is invalid
        // if token is not valid it will go the the catch block
        const decodedString = await jwtVerify(token, key);

        const payload = decodedString?.payload;

        // Get the current timestamp
        const currentTimestamp = Math.floor(Date.now() / 1000);

        // Check if the token has expired
        if (payload.exp && currentTimestamp >= payload.exp) {
            // Token has expired

            return false;
        } else {
            // Token is still valid
            return true;
        }
    } catch (error) {
        console.log("[token verification errror]", error);
        // cookies().delete("authToken");

        return false;
    }
};

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
    const path = request.nextUrl.pathname;
    const isAccess = request.cookies.get("prospect");
    const adminToken = request.cookies.get("authToken");

    // handle admin access
    if (path.startsWith("/admin")) {
        if (!adminToken) {
            return NextResponse.redirect(new URL("/auth", request.url));
        }
        const authenticated = await tokenVerify(adminToken["value"]);
        if (authenticated) {
            return NextResponse.next();
        } else {
            return NextResponse.redirect(new URL("/auth", request.url));
        }
    }

    if (path === "/free-training/content" && !isAccess) {
        return NextResponse.redirect(new URL("/free-training", request.url));
    } else if (path === "/free-training" && isAccess) {
        return NextResponse.redirect(
            new URL("/free-training/content", request.url)
        );
    } else if (path == "/community") {
        return NextResponse.redirect("https://discord.gg/uxfQY7HmQS");
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
        "/admin/:path*",
    ],
};
