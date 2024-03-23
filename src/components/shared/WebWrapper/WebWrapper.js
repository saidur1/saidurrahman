import Footer from "@/components/footer/Footer";
import Navbar2 from "@/components/navbar/navbar2";
import RemoveComponentsByCondition from "@/utils/RemoveComponentsByCondition";

const WebWrapper = ({ children }) => {
  return (
    <>
      {/* <ShadNavbar /> */}
      <Navbar2 />
      {children}

      <RemoveComponentsByCondition>
        <Footer />
      </RemoveComponentsByCondition>
    </>
  );
};

export default WebWrapper;
