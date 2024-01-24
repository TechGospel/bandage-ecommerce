import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";
import { defaultParagraphStyle } from "@/utils/constants";

const defaultTypographyStyle = {
  ...defaultParagraphStyle,
  fontWeight: "700",
};

const Banner = () => {
  const theme = useTheme();

  return (
    <Box
      bgcolor={theme.palette.secondary.main}
      display={{
        xs: "none",
        lg: "block",
      }}
    >
      <Box
        maxWidth="90rem"
        margin="0 auto"
        display="flex"
        padding="1.125rem 2.12rem 0.8075rem 2.12rem"
        justifyContent="space-between"
        color="white"
      >
        <Box display="flex" gap="1.86rem">
          <Box display="flex" gap="0.31rem" alignItems="center">
            <Box position="relative" width="1rem" height="1rem">
              <Image alt="" src="/assets/svgs/tel.svg" fill />
            </Box>
            <Typography {...defaultTypographyStyle}>(225) 555-0118</Typography>
          </Box>
          <Box display="flex" gap="0.31rem" alignItems="center">
            <Box position="relative" width="1rem" height="1rem">
              <Image alt="" src="/assets/svgs/envelope.svg" fill />
            </Box>
            <Typography {...defaultTypographyStyle}>
              michelle.rivera@example.com
            </Typography>
          </Box>
        </Box>
        <Typography {...defaultTypographyStyle}>
          Follow Us and get a chance to win 80% off
        </Typography>
        <Box display="flex" gap="0.9rem" alignItems="center">
          <Typography {...defaultTypographyStyle}>Follow Us :</Typography>
          <Box position="relative" width="1rem" height="1rem">
            <Image alt="" src="/assets/svgs/insta-white.svg" fill />
          </Box>
          <Box position="relative" width="1rem" height="1rem">
            <Image alt="" src="/assets/svgs/yt-white.svg" fill />
          </Box>
          <Box position="relative" width="1rem" height="1rem">
            <Image alt="" src="/assets/svgs/fb-white.svg" fill />
          </Box>
          <Box position="relative" width="1rem" height="1rem">
            <Image alt="" src="/assets/svgs/tw-white.svg" fill />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;