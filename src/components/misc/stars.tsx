import { Box } from "@mui/material";
import Image from "next/image";
import React, { FC } from "react";

const Stars: FC<{ rating?: number }> = ({ rating = 0 }) => {
  return (
    <Box display="flex" gap="0.31rem">
      {Array(5)
        .fill(null)
        .map((_, index) => (
          <Box position="relative" key={index} width="1.38rem" height="1.38rem">
            <Image
              src={`/assets/svgs/star${
                index + 1 > rating ? "-outlined" : ""
              }.svg`}
              alt=""
              fill
            />
          </Box>
        ))}
    </Box>
  );
};

export default Stars;