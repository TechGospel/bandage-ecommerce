import Stars from "@/components/misc/stars";
import SectionLayout from "@/layouts/section";
import { defaultH3Style, defaultParagraphStyle } from "@/utils/constants";
import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";

const Testimonials = () => {
  const theme = useTheme();

  return (
    <SectionLayout
      maxWidth="70.5rem"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        flexDirection: {
          xs: "column",
          lg: "row",
        },
        padding: {
          xs: "0 0 2.55rem 0",
          lg: "8rem 3rem",
        },
      }}
    >
      <Box width="100%" maxWidth="30rem" textAlign="center">
        <Typography {...defaultH3Style} color="#252B42" mb="1.75rem">
          What they say about us
        </Typography>
        <Box
          padding="1.88rem 0"
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="1.25rem"
        >
          <Box
            width="5.625rem"
            height="5.625rem"
            position="relative"
            borderRadius="50%"
            overflow="hidden"
          >
            <Image
              src={`/assets/images/user-1.webp`}
              alt=""
              fill
              style={{ objectFit: "cover" }}
            />
          </Box>
          <Stars rating={4} />
          <Typography {...defaultParagraphStyle} fontWeight="700">
            Slate helps you see how many more days you need to work to reach
            your financial goal.
          </Typography>
          <Box>
            <Typography
              color={theme.palette.primary.main}
              {...defaultParagraphStyle}
              fontWeight="700"
            >
              Regina Miles
            </Typography>
            <Typography
              color="#252B42"
              fontSize="0.875rem"
              fontWeight="700"
              lineHeight="1.5rem"
              letterSpacing="0.0125rem"
            >
              Designer
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        width="100%"
        maxWidth="31.22rem"
        display="grid"
        gridTemplateColumns="repeat(3, 1fr)"
        sx={{
          gap: {
            xs: "0rem 0.87rem",
            lg: "1.12rem",
          },
        }}
      >
        {Array(9)
          .fill(null)
          .map((_, index) => (
            <Box
              key={index}
              position="relative"
              sx={{
                height: {
                  xs: "7rem",
                  lg: "8.92rem",
                },
              }}
            >
              <Box
                component={Image}
                src={`/assets/images/t-${index + 1}.webp`}
                alt=""
                fill
                objectFit="contain"
              />
            </Box>
          ))}
      </Box>
    </SectionLayout>
  );
};

export default Testimonials;