import Footer from "@/components/footer/Footer";
import ShadNavbar from "@/components/navbar/ShadNavbar";
import PromotionNavbar from "@/components/promotionModal/black-friday-promotion-navbar";
import RemoveComponentsByCondition from "@/utils/RemoveComponentsByCondition";

const WebWrapper = ({ children }) => {
    return (
        <>
            <PromotionNavbar />
            <ShadNavbar />
            {children}

            <RemoveComponentsByCondition>
                <Footer />
            </RemoveComponentsByCondition>
        </>
    );
};

export default WebWrapper;
