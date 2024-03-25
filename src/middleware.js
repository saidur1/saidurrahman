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
      console.log("token has expired");

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
    if (!authenticated) {
      return NextResponse.redirect(new URL("/auth", request.url));
    }
    return NextResponse.next();
  }

  if (path === "/free-training/content" && !isAccess) {
    return NextResponse.redirect(new URL("/free-training", request.url));
  } else if (path === "/free-training" && isAccess) {
    return NextResponse.redirect(
      new URL("/free-training/content", request.url)
    );
  } else if (path == "/community") {
    return NextResponse.redirect("https://discord.gg/uxfQY7HmQS");
  } else if (path === "/lf") {
    return NextResponse.redirect(
      "https://us.bigin.online/org836263977/forms/lead-form"
    );
  } else if (path === "/fb") {
    return NextResponse.redirect("https://www.facebook.com/saidurrahmanfb");
  } else if (path === "/li") {
    return NextResponse.redirect("https://www.linkedin.com/in/saidurrahmanorg");
  } else if (path === "/z") {
    return NextResponse.redirect(
      "https://zoom.us/j/4548282153?pwd=bWRpM0o4UlVnTTUwbWYwL2JHSTQwdz09"
    );
  } else if (path === "/c") {
    return NextResponse.redirect("https://calendly.com/saidur/schedule");
  } else if (path === "/aa") {
    return NextResponse.redirect(
      "https://www.skool.com/accountability-accelerator"
    );
  } else if (path === "/ac") {
    return NextResponse.redirect(
      "https://www.facebook.com/groups/accountabilitycommunitytm"
    );
  } else if (path === "/p") {
    return NextResponse.redirect("https://buy.stripe.com/9AQ14x0c4dIhbkc14d");
  } else if (path === "/s") {
    return NextResponse.redirect(
      "https://www.skool.com/refer?ref=f1e9e431ca874877b48764eb37c04b7c"
    );
  } else if (path === "/y") {
    return NextResponse.redirect(
      "https://www.youtube.com/saidurrahmanTV?sub_confirmation=1"
    );
  } else if (path === "/paypal") {
    return NextResponse.redirect(
      "https://www.paypal.com/paypalme/saidurrahmanorg"
    );
  } else if (path === "/joinac") {
    return NextResponse.redirect("https://buy.stripe.com/aEU8wZ7Ew6fP5ZS3ch");
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
    "/lf",
    "/fb",
    "/li",
    "/z",
    "/c",
    "/aa",
    "/ac",
    "/p",
    "/s",
    "/y",
    "/paypal",
    "/joinac",
    "/admin/:path*",
  ],
};
