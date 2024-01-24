import { Box, Typography } from "@mui/material";
import React, { FC } from "react";
import { defaultH3Style, defaultParagraphStyle } from "@/utils/constants";

const paragraphStyle = {
  ...defaultParagraphStyle,
  fontWeight: "700",
};

const headingStyle = {
  fontSize: "2.5rem",
  fontWeight: "700",
  lineHeight: "3.125rem",
  letterSpacing: "0.0125rem",
};

const HeaderBanner: FC<{
  itemsCount: number;
  title?: string;
  imageSrc: string;
  isLarge?: boolean;
  smImageSrc?: string;
}> = ({ itemsCount, title = "FURNITURE", imageSrc, isLarge, smImageSrc }) => {
  return (
    <Box
      padding="1.5rem"
      height="100%"
      sx={{
        backgroundImage: {
          xs: `url(${smImageSrc || imageSrc})`,
          md: `url(${imageSrc})`,
        },
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Typography {...paragraphStyle} color="#2DC071" marginBottom="0.31rem">
        {itemsCount} Items
      </Typography>
      <Typography
        variant="h4"
        color="#252B42"
        textTransform="uppercase"
        marginBottom="0.31rem"
        fontWeight={700}
        sx={{
          fontSize: {
            xs: "1.5rem",
            lg: isLarge ? headingStyle.fontSize : "1.5rem",
          },
          lineHeight: {
            xs: "2rem",
            lg: isLarge ? headingStyle.lineHeight : "2rem",
          },
          letterSpacing: {
            xs: "0.00625rem",
            lg: isLarge ? headingStyle.letterSpacing : "0.00625rem",
          },
        }}
      >
        {title}
      </Typography>
      <Typography {...paragraphStyle} color="#252B42">
        Read More
      </Typography>
    </Box>
  );
};

export default HeaderBanner;