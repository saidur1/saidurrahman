export async function getProspects() {
    console.log(`${process.env.baseURL}, called`);
    try {
        const res = await fetch(`${process.env.baseURL}/api/admin/prospects`, {
            cache: "no-store",
        });
        const data = await res.json();

        if (!res.ok) {
            console.log("can't get prospects");
        } else {
            const users = data?.map(({ _id, ...rest }) => ({
                id: _id,
                ...rest,
            }));
            return users;
        }
    } catch (error) {
        console.log("FETCH in <getProspect>", error);
        return [];
    }
}
