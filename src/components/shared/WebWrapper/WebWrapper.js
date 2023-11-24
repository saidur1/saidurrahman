import Footer from "@/components/footer/Footer";
import NextNavbar from "@/components/navbar/NextNavbar";
import PromotionNavbar from "@/components/promotionModal/black-friday-promotion-navbar";
import RemoveComponentsByCondition from "@/utils/RemoveComponentsByCondition";

const WebWrapper = ({ children }) => {
    return (
        <>
            <PromotionNavbar />
            <NextNavbar />
            {children}

            <RemoveComponentsByCondition>
                <Footer />
            </RemoveComponentsByCondition>
        </>
    );
};

export default WebWrapper;
