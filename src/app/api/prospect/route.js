import Prospect from "@/models/Prospect";
import { dbConnect } from "@/utils/db";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request, response) {
    const { email, name } = await request.json();
    try {
        await dbConnect();
        const prospect = await Prospect.findOne({ email: email });

        if (!prospect) {
            const newProspect = new Prospect({ email: email, name: name });

            const result = await newProspect.save();
            cookies().set("prospect", true);
            return NextResponse.json(
                { result: result, succes: true },
                { status: 201 }
            );
        } else {
            cookies().set("prospect", true);
            return NextResponse.json({ succes: true }, { status: 200 });
        }
    } catch (error) {
        return new NextResponse("Database error", { status: 500 });
    }
}
