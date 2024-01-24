import Post from "@/components/cards/post";
import SectionTitle from "@/components/misc/section-title";
import SectionLayout from "@/layouts/section";
import { Box } from "@mui/material";
import React from "react";

const Posts = () => {
  return (
    <SectionLayout padding="7rem 0">
      <SectionTitle
        section="Practice Advice"
        title="Featured Posts"
        mb="5rem"
        sectionProps={{
          color: "#23A6F0",
          fontSize: "0.875rem",
          fontWeight: 700,
        }}
      />
      <Box display="grid" gap="0.62rem" sx={{
        gridTemplateColumns: {
          xs: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)"
        }
      }}>
        <Post image="/assets/images/post-1.webp" />
        <Post image="/assets/images/post-2.webp" />
        <Post image="/assets/images/post-3.webp" />
      </Box>
    </SectionLayout>
  );
};

export default Posts;