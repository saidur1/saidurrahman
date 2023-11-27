import Prospect from "@/models/Prospect";
import { dbConnect } from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await dbConnect();
        const result = await Prospect.find({}).select(
            "-createdAt -__v -updatedAt"
        );
        return NextResponse.json(result, { status: 200 });
    } catch (error) {
        console.log("Prospect Getting Error", error);
        return NextResponse.json("Internet Error", { status: 500 });
    }
}
