import { getProspects } from "@/assets/fetch/getProspects";
import TableContent from "./TableContent";

const ContactAll = async () => {
    const data = await getProspects();
    const users = data.map(({ _id, ...rest }) => ({
        id: _id,
        ...rest,
    }));
    return (
        <div>
            <TableContent users={users} />
        </div>
    );
};

export default ContactAll;
