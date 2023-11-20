import Prospect from "@/models/Prospect";
import { dbConnect } from "@/utils/db";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request, response) {
    const reqBody = await request.json();
    const { email } = reqBody;
    try {
        await dbConnect();
        const prospect = await Prospect.findOne({ email: email });

        if (!prospect) {
            const result = await Prospect.create(reqBody);
            cookies().set("prospect", true);
            return NextResponse.json(
                { result: result, succes: true },
                { status: 201 }
            );
        } else {
            const result = await Prospect.updateOne({ email: email }, reqBody);
            cookies().set("prospect", true);
            return NextResponse.json(result, { status: 200 });
        }
    } catch (error) {
        return new NextResponse("Database error", { status: 500 });
    }
}
