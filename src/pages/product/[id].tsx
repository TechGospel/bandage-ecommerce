import ProductDetails from "@/components/pages/shop/details";
import Header from "@/components/pages/shop/header";
import Partners from "@/components/pages/shop/partners";
import Products from "@/components/pages/shop/products";
import { Box } from "@mui/material";
import { GetServerSidePropsContext } from "next";
import React from "react";

const Product = ({ id }: { id: string }) => {
  return (
    <Box bgcolor="#FAFAFA">
      <Header id={id} />
      <ProductDetails />
      <Products />
      <Partners />
    </Box>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  return {
    props: {
      id: context.params?.id
    }
  }
}

export default Product;