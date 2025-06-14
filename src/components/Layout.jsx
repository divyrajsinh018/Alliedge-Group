import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import BackgroundBubbles from "./BackgroundBubbles";

const Layout = ({ children }) => {
  return (
    <div className="relative flex flex-col min-h-screen">
      {/* <BackgroundBubbles /> ✅ render bubbles here */}
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
