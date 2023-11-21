import { revalidateTag } from "next/cache";

async function updateProspect({ data, prospectId }) {
    try {
        const res = await fetch(
            `${process.env.baseURL}/api/admin/prospects/${prospectId}`,
            {
                method: "PUT",
                body: JSON.stringify(data),
            }
        );

        if (!res.ok) {
            toast.error("Cannot update data");
        } else {
            revalidateTag("prospects");
            return true;
        }
    } catch (error) {
        console.log("Updated prospect from modal error:", error);
    }
}

export default updateProspect;
