import Auth from "@/models/Auth";
import { dbConnect } from "@/utils/db";
import { SignJWT } from "jose";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req) {
    const { email, password } = await req.json();

    const key = new TextEncoder().encode(process.env.JWT_SECRET);
    try {
        await dbConnect();

        // check if user exist
        const user = await Auth.find({ email });

        if (!user) {
            return NextResponse.json("User not found", { status: 404 });
        }
        // check if passwrod matched

        const passwordMatched = user[0]["password"] === password;

        if (!passwordMatched) {
            return NextResponse.json("Password doesn't matched", {
                status: 404,
            });
        }

        // prepare response

        const payload = {
            _id: user[0]["_id"],
            email: user[0]["email"],
            profilePhoto: user[0]["profilePhoto"],
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

        // response
        const responseBody = {
            name: user[0]["name"],
            profilePhoto: user[0]["profilePhoto"],
        };

        return NextResponse.json(responseBody, { status: 200 });
    } catch (error) {
        console.log("[admin login error:]", error);
        return NextResponse.json(error, { status: 500 });
    }
}
