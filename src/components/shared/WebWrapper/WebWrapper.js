import Footer from "@/components/footer/Footer";
import NextNavbar from "@/components/navbar/NextNavbar";
import RemoveComponentsByCondition from "@/utils/RemoveComponentsByCondition";

const WebWrapper = ({ children }) => {
    return (
        <>
            <NextNavbar />
            {children}

            <RemoveComponentsByCondition>
                <Footer />
            </RemoveComponentsByCondition>
        </>
    );
};

export default WebWrapper;
