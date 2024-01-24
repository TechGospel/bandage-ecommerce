import { defaultH3Style, defaultParagraphStyle } from "@/utils/constants";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React, { FC } from "react";

export type OfferProps = { image: string; title: string; description: string };

const Offer: FC<OfferProps> = ({ image, title, description }) => {
  return (
    <Box
      width="100%"
      maxWidth="19.7rem"
      padding="2.19rem 2.5rem"
      display="flex"
      flexDirection="column"
      gap="1.25rem"
      textAlign="center"
      alignItems="center"
    >
      <Box position="relative" width="4.5rem" height="4.5rem">
        <Image src={image} alt="" fill />
      </Box>
      <Typography
        {...defaultH3Style}
        color="#252B42"
      >
        {title}
      </Typography>
      <Typography {...defaultParagraphStyle} color="#737373">
        {description}
      </Typography>
    </Box>
  );
};

export default Offer;