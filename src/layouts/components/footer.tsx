import { Box, Typography } from "@mui/material";
import React, { useCallback } from "react";
import Logo from "./logo";
import Image from "next/image";
import { footerLinks } from "../constants";
import Link from "next/link";
import Email from "@/components/inputs/email";
import { defaultParagraphStyle } from "@/utils/constants";

const Footer = () => {
  const footerLinkRightSpacing = useCallback((index: number) => {
    switch (index) {
      case 0:
        return "3.94rem";
      case 1:
        return "5.31rem";
      case 2:
        return "2.25rem";
      case 3:
        return "4.44rem";
      default:
        return "0";
    }
  }, []);

  return (
    <Box component="footer">
      <Box height="8.875rem">
        <Box
          maxWidth="65.625rem"
          margin="auto"
          display="flex"
          height="100%"
          sx={{
            flexDirection: {
              xs: "column",
              md: "row",
            },
            alignItems: {
              xs: "flex-start",
              md: "center",
            },
            justifyContent: {
              xs: "center",
              md: "space-between",
            },
            gap: {
              xs: "1.66rem",
              md: 0,
            },
            px: {
              xs: "2.8rem",
              lg: 0,
            },
          }}
        >
          <Logo />
          <Box
            display="flex"
            justifyContent="center"
            gap="1.25rem"
            sx={{
              width: {
                md: "14.75rem",
              },
            }}
          >
            <Box position="relative" width="1.5rem" height="1.24rem">
              <Image alt="" src="/assets/svgs/fb-blue.svg" fill />
            </Box>
            <Box position="relative" width="1.5rem" height="1.24rem">
              <Image alt="" src="/assets/svgs/insta-blue.svg" fill />
            </Box>
            <Box position="relative" width="1.5rem" height="1.24rem">
              <Image alt="" src="/assets/svgs/tw-blue.svg" fill />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        maxWidth="65.625rem"
        margin="auto"
        padding="3.12rem"
        borderTop="0.0625rem solid #e6e6e6"
        sx={{
          px: {
            xs: "2.8rem",
            lg: 0,
          },
        }}
      >
        <Box
          display="flex"
          sx={{
            flexDirection: {
              xs: "column",
              md: "row",
            },
            gap: {
              xs: "1.8rem",
              md: 0,
            },
          }}
        >
          {footerLinks.map((item, index) => (
            <Box
              key={item.title}
              marginRight={{
                md: footerLinkRightSpacing(index),
              }}
            >
              <Typography
                variant="h5"
                fontSize="1rem"
                fontWeight="700"
                lineHeight="1.5rem"
                letterSpacing="0.00625rem"
                color="#252B42"
                marginBottom="1.25rem"
              >
                {item.title}
              </Typography>
              <Box display="flex" flexDirection="column" gap="0.62rem">
                {item.links.map((link) => (
                  <Typography
                    component={Link}
                    href={link.link}
                    key={link.title}
                    display="block"
                    fontSize="0.875rem"
                    fontWeight="700"
                    lineHeight="1.5rem"
                    letterSpacing="0.0125rem"
                    color="#737373"
                  >
                    {link.title}
                  </Typography>
                ))}
              </Box>
            </Box>
          ))}
          <Box>
            <Typography
              variant="h5"
              fontSize="1rem"
              fontWeight="700"
              lineHeight="1.5rem"
              letterSpacing="0.00625rem"
              color="#252B42"
              marginBottom="1.25rem"
            >
              Get In Touch
            </Typography>
            <Email/>
            <Typography
              fontSize="0.75rem"
              lineHeight="1.75rem"
              letterSpacing="0.0125rem"
              color="#737373"
            >
              Lore imp sum dolor Amit
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box padding="1.56rem" bgcolor="#FAFAFA">
        <Box
          margin="auto"
          sx={{
            maxWidth: {
              xs: "12rem",
              md: "65.625rem",
            },
          }}
        >
          <Typography
            {...defaultParagraphStyle}
            fontWeight="700"
            color="#737373"
            sx={{
              textAlign: {
                xs: "center",
                md: "left",
              },
            }}
          >
            Made With Love By Finland{" "}
            <Typography
              component="span"
              {...defaultParagraphStyle}
              fontWeight="700"
              color="#737373"
              sx={{ display: { xs: "none", md: "inline" } }}
            >
              All Right Reserved
            </Typography>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;