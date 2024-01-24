import SectionLayout from "@/layouts/section";
import { Box } from "@mui/material";
import React from "react";

const Partners = () => {
  const data = ["hooli", "lyft", "pyper", "stripe", "aws", "bot"];

  return (
    <SectionLayout maxWidth="65.875rem">
      <Box
        py="3.12rem"
        display="flex"
        sx={{
          flexDirection: {
            xs: "column",
            md: "row",
          },
          alignItems: "center",
          gap: {
            xs: "3.75rem",
            md: "1.88rem",
          },
        }}
      >
        {data.map((text) => (
          <Box
            key={text}
            width="9.5625rem"
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/assets/svgs/${text}.svg`} alt="" />
          </Box>
        ))}
      </Box>
    </SectionLayout>
  );
};

export default Partners;