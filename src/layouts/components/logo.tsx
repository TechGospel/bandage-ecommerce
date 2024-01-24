import { Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Typography
      component={Link}
      color="#252B42"
      fontSize="1.5rem"
      fontWeight="700"
      lineHeight="2rem"
      letterSpacing="0.00625rem"
      href="/"
      sx={{
        textDecoration: "none",
      }}
    >
      Bandage
    </Typography>
  );
};

export default Logo;