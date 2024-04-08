import Navbar from "@/components/navbar/navbar";

const WebWrapper = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default WebWrapper;
