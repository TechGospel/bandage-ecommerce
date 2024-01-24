import { defaultH4Style, defaultParagraphStyle } from "@/utils/constants";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

const Post: FC<{ image: string }> = ({ image }) => {
  return (
    <Box
      component="article"
      bgcolor="#fff"
      width="100%"
      maxWidth="21.75rem"
      boxShadow="0px 2px 4px 0px rgba(0, 0, 0, 0.10)"
      overflow="hidden"
    >
      <Box position="relative" height="18.75rem">
        <Image src={image} alt="" fill />
      </Box>
      <Box
        padding="1.56rem"
        pb="2.19rem"
        display="flex"
        flexDirection="column"
        gap="0.62rem"
      >
        <Box>
          <Typography
            component="span"
            color="#8EC2F2"
            fontSize="0.75rem"
            lineHeight="1rem"
            letterSpacing="0.0125rem"
          >
            Google
          </Typography>
          <Typography
            component="span"
            mx="0.94rem"
            fontSize="0.75rem"
            lineHeight="1rem"
            letterSpacing="0.0125rem"
            color="#737373"
          >
            Trending
          </Typography>
          <Typography
            component="span"
            fontSize="0.75rem"
            lineHeight="1rem"
            letterSpacing="0.0125rem"
            color="#737373"
          >
            New
          </Typography>
        </Box>
        <Typography color="#252B42" {...defaultH4Style}>
          Loudest à la Madison #1 (L&apos;integral)
        </Typography>
        <Typography
          {...defaultParagraphStyle}
          color="#737373"
          maxWidth="17.5rem"
        >
          We focus on ergonomics and meeting you where you work. It&apos;s only
          a keystroke away.
        </Typography>
        <Box display="flex" py="0.94rem" justifyContent="space-between">
          <Typography
            component="small"
            fontSize="0.75rem"
            lineHeight="1rem"
            letterSpacing="0.0125rem"
            color="#737373"
            display="inline-flex"
            alignItems="center"
            gap="0.31rem"
          >
            <Typography
              component="span"
              display="inline-block"
              position="relative"
              width="1rem"
              height="0.92rem"
            >
              <Image fill src="/assets/svgs/clock.svg" alt="" />
            </Typography>
            22 April 2021
          </Typography>
          <Typography
            component="small"
            fontSize="0.75rem"
            lineHeight="1rem"
            letterSpacing="0.0125rem"
            color="#737373"
            display="inline-flex"
            alignItems="center"
            gap="0.31rem"
          >
            <Typography
              component="span"
              display="inline-block"
              position="relative"
              width="1rem"
              height="1rem"
            >
              <Image fill src="/assets/svgs/graph.svg" alt="" />
            </Typography>
            10 comments
          </Typography>
        </Box>
        <Typography
          component={Link}
          href="/post"
          display="flex"
          gap="0.62rem"
          alignItems="center"
          fontSize="0.875rem"
          lineHeight="1.25rem"
          letterSpacing="0.0125rem"
          color="#737373"
          maxWidth="17.5rem"
          fontWeight="700"
        >
          Learn More
          <Typography
            component="span"
            display="inline-block"
            position="relative"
            width="0.56rem"
            height="1rem"
          >
            <Image fill src="/assets/svgs/gt.svg" alt="" />
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};

export default Post;