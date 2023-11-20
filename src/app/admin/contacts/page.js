import { getProspects } from "@/assets/fetch/getProspects";
import TableContent from "./TableContent";

const ContactAll = async () => {
    const data = await getProspects();
    return (
        <div>
            <TableContent users={data} />
        </div>
    );
};

export default ContactAll;
