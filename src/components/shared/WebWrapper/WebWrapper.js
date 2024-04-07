import Navbar2 from "@/components/navbar/navbar";

const WebWrapper = ({ children }) => {
  return (
    <>
      {/* <ShadNavbar /> */}
      <Navbar2 />
      {children}

      {/* <RemoveComponentsByCondition>
        <Footer />
      </RemoveComponentsByCondition> */}
    </>
  );
};

export default WebWrapper;
