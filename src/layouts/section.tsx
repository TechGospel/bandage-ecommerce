import { Box, BoxProps } from "@mui/material";
import React, { FC } from "react";

const SectionLayout: FC<BoxProps> = (props) => {
  return (
    <Box px="2.06rem">
      <Box
        component="section"
        maxWidth="65.625rem"
        margin="0 auto"
        {...props}
      />
    </Box>
  );
};

export default SectionLayout;