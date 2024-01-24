import Banner from "@/layouts/components/banner";
import React, { FC, ReactNode } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Box } from "@mui/material";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Box component="main">
      <Banner />
      <Navbar />
      <Box component="section">{children}</Box>
      <Footer />
    </Box>
  );
};

export default Layout;