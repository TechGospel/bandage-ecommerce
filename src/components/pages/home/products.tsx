import ProductList from "@/components/cards/product-list";
import SectionTitle from "@/components/misc/section-title";
import SectionLayout from "@/layouts/section";
import { RootState } from "@/store";
import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { IProductState } from "../../../types";

const Products = () => {
  const [productCount, setProductCount] = useState(10)
  const products = useSelector<RootState>(
    (state) => state.products
  ) as IProductState;
  const limit = products.all.data?.limit || 10;

  const loadMore = () => {
    const newLimit = Number(limit) + 5;
    setProductCount(newLimit)
  };

  return (
    <SectionLayout maxWidth="67.69rem" py="5rem">
      <SectionTitle
        section="Featured Products"
        title="BESTSELLER PRODUCTS"
        description="Problems trying to resolve the conflict between"
        mb="3.5rem"
      />
      <ProductList limit={productCount} />
      <Box display="flex" justifyContent="center" mt="3.5rem">
        <Button
          variant="outlined"
          disabled={products.all.isLoading}
          sx={{
            padding: "0.94rem 2.5rem",
            borderRadius: "0.3125rem",
            fontSize: "0.875rem",
            fontWeight: "700",
            lineHeight: "1.375rem",
            letterSpacing: "0.0125rem",
          }}
          onClick={loadMore}
        >
          {products.all.isLoading ? "Fetching..." : "LOAD MORE PRODUCTS"}
        </Button>
      </Box>
    </SectionLayout>
  );
};

export default Products;