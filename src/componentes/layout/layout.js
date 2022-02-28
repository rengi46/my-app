import React from "react";

import Navbar from "../nav/nav";

import Footer from "../foot/foot";

export function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
