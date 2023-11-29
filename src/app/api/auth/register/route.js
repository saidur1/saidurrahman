import Auth from "@/models/Auth";
import { dbConnect } from "@/utils/db";
import { SignJWT } from "jose";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req) {
    const bodyData = await req.json();

    const key = new TextEncoder().encode(process.env.JWT_SECRET);

    try {
        await dbConnect();
        const result = await Auth.create(bodyData);
        const payload = {
            _id: result["_id"],
            email: result["email"],
        };

        const token = await new SignJWT(payload)
            .setProtectedHeader({
                alg: "HS256",
            })
            .setIssuedAt(new Date())
            .setIssuer("www.saidurrahman.org")
            .setExpirationTime("1h")
            .sign(key);

        cookies().set("authToken", token);

        return NextResponse.json("Registration successfull", { status: 201 });
    } catch (error) {
        console.log("[admin registration error]", error);
        return NextResponse.json(error, { status: 500 });
    }
}
