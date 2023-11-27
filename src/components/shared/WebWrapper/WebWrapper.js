import Footer from "@/components/footer/Footer";
import ShadNavbar from "@/components/navbar/ShadNavbar";
import RemoveComponentsByCondition from "@/utils/RemoveComponentsByCondition";

const WebWrapper = ({ children }) => {
    return (
        <>
            <ShadNavbar />
            {children}

            <RemoveComponentsByCondition>
                <Footer />
            </RemoveComponentsByCondition>
        </>
    );
};

export default WebWrapper;
