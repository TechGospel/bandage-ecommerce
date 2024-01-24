import { defaultParagraphStyle } from "@/utils/constants";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React, { FC } from "react";

const Product: FC<{
  title: string;
  category: string;
  oldPrice: number;
  newPrice: number | string;
  image: string;
  leftAlign?: boolean;
}> = ({ title, category, oldPrice, newPrice, image, leftAlign }) => {
  return (
    <Box bgcolor="#fff">
      <Box position="relative" height="14.875rem">
        <Image src={image} alt="" style={{ objectFit: "cover" }} fill />
      </Box>
      <Box
        padding="1.56rem"
        pb="2.19rem"
        display="flex"
        flexDirection="column"
        gap="0.62rem"
        {...(!leftAlign ? { textAlign: "center" } : {})}
      >
        <Typography
          variant="h5"
          fontSize="1rem"
          fontWeight={700}
          lineHeight="1.5rem"
          letterSpacing="0.00625rem"
          color="#252B42"
        >
          {title}
        </Typography>
        <Typography
          {...defaultParagraphStyle}
          color="#737373"
          fontWeight={700}
          whiteSpace="nowrap"
        >
          {category}
        </Typography>
        <Box
          display="flex"
          gap="0.31rem"
          {...(!leftAlign ? { justifyContent: "center" } : {})}
        >
          <Typography
            variant="h5"
            fontSize="1rem"
            fontWeight={700}
            lineHeight="1.5rem"
            letterSpacing="0.00625rem"
            color="#bdbdbd"
          >
            ${oldPrice}
          </Typography>
          <Typography
            variant="h5"
            fontSize="1rem"
            fontWeight={700}
            lineHeight="1.5rem"
            letterSpacing="0.00625rem"
            color="#23856D"
          >
            ${newPrice}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Product;