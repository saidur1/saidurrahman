import { toast } from "react-toastify";
import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";

const getData = async () => {
    const res = await fetch(`${process.env.baseURL}/api/admin/prospects`);
    if (!res.ok) {
        toast.error("can't get the leads from database [components: Leads]");
    }
    const data = await res.json();

    // exchange _id to id [because: mongodb chooses _id by default for us]
    const result = arrayProcessor(data);
    return result;
};

const Leads = async () => {
    const data = await getData();
    return (
        <div className="p-6">
            <DataTable columns={columns} data={data} />
        </div>
    );
};

export default Leads;

const arrayProcessor = (arr) => {
    return arr.map((item) => {
        const { _id, ...rest } = item;
        return { id: _id, ...rest };
    });
};
