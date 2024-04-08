import Navbar from "@/components/navbar/navbar";

const WebWrapper = ({ children }) => {
  return (
    <>
      {/* this is navbar */}
      <Navbar />
      {children}
    </>
  );
};

export default WebWrapper;
