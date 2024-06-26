import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  const path = request.nextUrl.pathname;

  if (path === "/lf") {
    return NextResponse.redirect(
      "https://us.bigin.online/org836263977/forms/lead-form"
    );
  } else if (path === "/fb") {
    return NextResponse.redirect("https://www.facebook.com/saidurrahmanfb");
  } else if (path === "/li") {
    return NextResponse.redirect("https://www.instagram.com/saidurrahmanorg/");
  } else if (path === "/z") {
    return NextResponse.redirect(
      "https://zoom.us/j/4886266526?pwd=L2ZTdG9QbkU4ZHdDTUs5dFhqT1RoZz09"
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
