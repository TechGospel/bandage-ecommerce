import { Box } from "@mui/material";
import Link from "next/link";
import React, { FC, useEffect } from "react";
import Product from "./product";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { IProductState } from "../../types";
import { fetchAllProducts } from "@/store/async/products";

const ProductList: FC<{
  cols?: number;
  leftAlign?: boolean;
  limit?: number;
}> = ({ cols = 5, leftAlign, limit = 10 }) => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector<RootState>(
    (state) => state.products
  ) as IProductState;

  useEffect(() => {
    dispatch(fetchAllProducts({ limit }));
  }, [dispatch, limit]);

  return (
    <Box
      display="grid"
      gap={cols === 4 ? "1.5rem 1.88rem" : "0.94rem 1.87rem"}
      gridTemplateColumns={{
        xs: "repeat(1, 1fr)",
        sm: "repeat(2, 1fr)",
        md: "repeat(3, 1fr)",
        lg: `repeat(${cols}, 1fr)`,
      }}
    >
      {products?.all?.data?.products?.map((item) => (
        <Box
          component={Link}
          display="block"
          key={item.id}
          href={`/product/${item.id}`}
        >
          <Product
            leftAlign={leftAlign}
            title={item.title}
            category={item.category}
            oldPrice={item.price}
            newPrice={Number(
              item.price - (item.price * item.discountPercentage) / 100
            ).toFixed(2)}
            image={item.thumbnail}
          />
        </Box>
      ))}
    </Box>
  );
};

export default ProductList;