import Button from "@/components/buttons/button";
import ProductCarousel from "@/components/carousel/product";
import Stars from "@/components/misc/stars";
import SectionLayout from "@/layouts/section";
import { AppDispatch, RootState } from "@/store";
import {
  defaultH3Style,
  defaultH4Style,
  defaultParagraphStyle,
} from "@/utils/constants";
import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IProductState } from "../../../types";
import { fetchSingleProduct } from "@/store/async/products";
import {
  addProductToCart,
  addProductToWishlist,
} from "@/store/slices/products";
import { toast } from "react-toastify";

const Header = ({ id }: { id: string }) => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector<RootState>(
    (state) => state.products
  ) as IProductState;
  const data = products.single.data;
  const theme = useTheme();
  const colors = ["#23A6F0", "#2DC071", "#E77C40", "#252B42"];

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [dispatch, id]);

  const addCart = () => data && dispatch(addProductToCart({ product: data }));

  const addwishlist = () => data && dispatch(addProductToWishlist(data));

  const getImages = () => {
    if (data) return [data.thumbnail, ...data.images];
    return [];
  };

  return (
    <SectionLayout component="header">
      <Box
        padding="2.12rem 0.53rem"
        display="flex"
        alignItems="center"
        gap="0.94rem"
        sx={{
          justifyContent: {
            xs: "center",
            md: "flex-start",
          },
        }}
      >
        <Typography
          component={Link}
          href="/"
          color="#252B42"
          fontSize="0.875rem"
          fontWeight="700"
          lineHeight="1.5rem"
          letterSpacing="0.0125rem"
        >
          Home
        </Typography>
        <Box position="relative" width="0.56rem" height="1rem">
          <Image src="/assets/svgs/gt-2.svg" alt="" fill />
        </Box>
        <Typography {...defaultParagraphStyle} fontWeight="700" color="#bdbdbd">
          Shop
        </Typography>
      </Box>
      {data && (
        <Box
          display="flex"
          gap="1.88rem"
          sx={{
            flexDirection: {
              xs: "column",
              md: "row",
            },
            mb: {
              xs: "3rem",
              md: "5rem",
            },
          }}
        >
          <ProductCarousel images={getImages()} />
          <Box
            width="100%"
            padding="1.5rem"
            pt="0.69rem"
            display="flex"
            flexDirection="column"
            sx={{
              px: {
                xs: "1.88rem",
                md: 0,
              },
              gap: {
                xs: "1rem",
                md: "7.44rem",
              },
            }}
          >
            <Box>
              <Typography {...defaultH4Style} color="#252B42">
                {data?.title}
              </Typography>
              <Box display="flex" gap="0.63rem" alignItems="center">
                <Stars rating={Math.floor(data?.rating ?? 0)} />
                <Typography
                  {...defaultParagraphStyle}
                  color="#737373"
                  fontWeight={700}
                >
                  {data?.rating ?? 0} Reviews
                </Typography>
              </Box>
              <Typography {...defaultH3Style} color="#252B42" mt="1.25rem">
                $
                {Number(
                  data.price - (data.price * data.discountPercentage) / 100
                ).toFixed(2)}
              </Typography>
              <Box display="flex" gap="0.31rem" mt="0.31rem">
                <Typography
                  {...defaultParagraphStyle}
                  color="#737373"
                  fontWeight={700}
                >
                  Availability :
                </Typography>
                <Typography
                  {...defaultParagraphStyle}
                  color={theme.palette.primary.main}
                  fontWeight={700}
                >
                  {data.stock > 0 ? "In" : "Out of"} Stock
                </Typography>
              </Box>
              <Typography
                {...defaultParagraphStyle}
                color="#858585"
                maxWidth="16.94rem"
                mt="2rem"
                sx={{
                  display: {
                    md: "none",
                  },
                }}
              >
                {data.description}
              </Typography>
            </Box>
            <Box borderTop="0.0625rem solid #bdbdbd">
              <Box
                display="flex"
                gap="0.62rem"
                mt="1.81rem"
                sx={{
                  mb: {
                    xs: "3rem",
                    md: "4.19rem",
                  },
                }}
              >
                {colors.map((color) => (
                  <Box
                    key={color}
                    bgcolor={color}
                    width="1.875rem"
                    height="1.875rem"
                    borderRadius="50%"
                  />
                ))}
              </Box>
              <Box display="flex" gap="0.62rem">
                <Button
                  variant="contained"
                  sx={{
                    ...defaultParagraphStyle,
                    fontWeight: 700,
                    padding: "0.62rem 1.25rem",
                    textTransform: "capitalize",
                  }}
                >
                  Select Options
                </Button>
                <Box
                  role="button"
                  width="2.5rem"
                  height="2.5rem"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="50%"
                  border="1px solid #E8E8E8"
                  sx={{ cursor: "pointer" }}
                  onClick={addwishlist}
                  aria-label="wishlist"
                >
                  <Box position="relative" width="1.25rem" height="1.25rem">
                    <Image src="/assets/svgs/love-black.svg" alt="" fill />
                  </Box>
                </Box>
                <Box
                  role="button"
                  width="2.5rem"
                  height="2.5rem"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="50%"
                  border="1px solid #E8E8E8"
                  sx={{ cursor: "pointer" }}
                  onClick={addCart}
                  aria-label="cart"
                >
                  <Box position="relative" width="1.25rem" height="1.25rem">
                    <Image src="/assets/svgs/cart-black.svg" alt="" fill />
                  </Box>
                </Box>
                <Box
                  role="button"
                  width="2.5rem"
                  height="2.5rem"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="50%"
                  border="1px solid #E8E8E8"
                  sx={{ cursor: "pointer" }}
                  aria-label="eye"
                >
                  <Box position="relative" width="1.25rem" height="1.25rem">
                    <Image src="/assets/svgs/eye.svg" alt="" fill />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </SectionLayout>
  );
};

export default Header;