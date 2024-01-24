import ProductList from "@/components/cards/product-list";
import SectionLayout from "@/layouts/section";
import { defaultH3Style } from "@/utils/constants";
import { Box, Typography } from "@mui/material";
import React from "react";

const Products = () => {
  return (
    <SectionLayout py="3rem" maxWidth="65.125rem">
      <Box pb="1.5rem" mb="1.5rem" borderBottom="0.125rem solid #ececec">
        <Typography {...defaultH3Style} color="#252B42">
          BESTSELLER PRODUCTS
        </Typography>
      </Box>
      <ProductList leftAlign cols={4} limit={8} />
    </SectionLayout>
  );
};

export default Products;