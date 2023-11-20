import Prospect from "@/models/Prospect";
import { dbConnect } from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    const id = params.prospectId;

    try {
        await dbConnect();
        const result = await Prospect.findById(id);
        return NextResponse.json(result, { status: 200 });
    } catch (error) {
        return NextResponse.json(true, { status: 500 });
    }
}

export async function DELETE(req, { params }) {
    const id = params.prospectId;

    try {
        await dbConnect();
        await Prospect.findByIdAndDelete(id);
        return NextResponse.json(
            {
                msg: "Deleted Successfully",
            },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(error, { status: 500 });
    }
}

export async function PUT(req, { params }) {
    const id = params.prospectId;
    const reqBody = await req.json();

    try {
        await dbConnect();
        await Prospect.updateOne({ _id: id }, reqBody);
        return NextResponse.json(
            {
                msg: "Updated Successfully",
            },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(error, { status: 500 });
    }
}
