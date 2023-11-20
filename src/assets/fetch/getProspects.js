export async function getProspects() {
    try {
        const res = await fetch(`${process.env.baseURL}/api/admin/prospects`);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log("FETCH in <getProspect>", error);
        return [];
    }
}
