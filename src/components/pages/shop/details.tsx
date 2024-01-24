import Button from "@/components/buttons/button";
import SectionLayout from "@/layouts/section";
import { Box, Typography } from "@mui/material";
import React from "react";
import {
  defaultH3Style,
  defaultH4Style,
  defaultParagraphStyle,
} from "@/utils/constants";
import Image from "next/image";

const ProductDetails = () => {
  const tabs = ["Description", "Additional Information", "Reviews (0)"];

  return (
    <Box component="section" bgcolor="#fff" pb="3rem">
      <SectionLayout maxWidth="66rem">
        <Box
          display="flex"
          justifyContent="center"
          gap="3rem"
          borderBottom="0.0625rem solid #ececec"
          height="4.5rem"
        >
          {tabs.map((text) => (
            <Button
              key={text}
              variant="text"
              sx={{
                ...defaultParagraphStyle,
                fontWeight: 700,
                color: "#737373",
                px: 0,
                textTransform: "capitalize",
                height: "100%",
              }}
            >
              {text}
            </Button>
          ))}
        </Box>
        <Box mt="2.88rem" display="flex" gap="7.25rem" flexWrap="wrap">
          <Box width="100%" maxWidth="32.0625rem" display="flex" flexDirection="column" gap="1.88rem">
            <Typography {...defaultH3Style} color="#252B42">
              the quick fox jumps over
            </Typography>
            <Typography {...defaultParagraphStyle} color="#737373">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </Typography>
            <Typography
              {...defaultParagraphStyle}
              color="#737373"
              borderLeft="0.1875rem solid #23856D"
              pl="1.5rem"
              maxWidth="31.5rem"
            >
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </Typography>
            <Typography {...defaultParagraphStyle} color="#737373">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </Typography>
          </Box>
          <Box position="relative" height="23.25rem" width="100%" maxWidth="25.8125rem">
            <Image src="/assets/images/detail.webp" alt="" fill />
          </Box>
        </Box>
      </SectionLayout>
    </Box>
  );
};

export default ProductDetails;