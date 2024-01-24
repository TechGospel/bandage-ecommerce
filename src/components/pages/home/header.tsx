import HomeHeaderBanner from "@/components/banners/header";
import { Box, Grid } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Box
      component="header"
      sx={{
        padding: {
          xs: "0 2.5rem",
          lg: "5rem 2.5rem",
        },
      }}
    >
      <Box
        component="div"
        gridTemplateColumns="28.1875rem 20.6875rem 20.6875rem"
        gridTemplateRows="18.75rem 18.75rem"
        margin="auto"
        sx={{
          display: {
            xs: "flex",
            lg: "grid",
          },
          flexWrap: {
            xs: "wrap",
            lg: "nowrap",
          },
          justifyContent: {
            xs: "center",
          },
          gap: {
            xs: "0.94rem",
            lg: 0,
          },
          flexDirection: {
            xs: "column",
            md: "row",
          },
          width: {
            xs: "100%",
            lg: "fit-content",
          },
        }}
      >
        <Box
          gridRow="1/span 3"
          sx={{
            height: {
              xs: "18.75rem",
              lg: "auto",
            },
            mr: {
              lg: "1rem",
            },
            width: {
              xs: "100%",
              lg: "auto",
            },
          }}
        >
          <HomeHeaderBanner
            itemsCount={5}
            isLarge
            imageSrc="/assets/images/home-header-1.webp"
          />
        </Box>
        <Box
          gridColumn="2/span 3"
          gridRow="1"
          sx={{
            height: {
              xs: "18.75rem",
              lg: "auto",
            },
            mb: {
              lg: "1rem",
            },
            width: {
              xs: "100%",
              lg: "auto",
            },
          }}
        >
          <HomeHeaderBanner
            itemsCount={5}
            imageSrc="/assets/images/home-header-2.webp"
            smImageSrc="/assets/images/home-header-2-2.webp"
          />
        </Box>
        <Box
          gridRow="2"
          gridColumn="2"
          sx={{
            height: {
              xs: "18.75rem",
              lg: "auto",
            },
            mr: {
              lg: "1rem",
            },
            width: {
              xs: "100%",
              lg: "auto",
            },
          }}
        >
          <HomeHeaderBanner
            itemsCount={5}
            imageSrc="/assets/images/home-header-3.webp"
          />
        </Box>
        <Box
          gridRow="2"
          gridColumn="3"
          sx={{
            height: {
              xs: "18.75rem",
              lg: "auto",
            },
            width: {
              xs: "100%",
              lg: "auto",
            },
          }}
        >
          <HomeHeaderBanner
            itemsCount={5}
            imageSrc="/assets/images/home-header-4.webp"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;