import { Box, Modal, Popover, Typography } from "@mui/material";
import React, { useReducer, useState } from "react";
import Logo from "./logo";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import {
  IModalState,
  IProduct,
  IProductState,
  ModalType,
} from "../../types";
import { defaultH3Style, defaultParagraphStyle } from "@/utils/constants";
import Cart from "@/components/misc/cart";
import {
  addProductToCart,
  removeProductFromCart,
  removeProductFromWishlist,
} from "@/store/slices/products";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxWidth: "30rem",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: "1.25rem",
  borderRadius: "0.25rem",
};

const getNavLinkStyle = (isActive?: boolean) => {
  const navLinkStyle = {
    color: "#737373",
    fontSize: "0.875rem",
    fontWeight: 700,
    letterSpacing: "0.0125rem",
  };

  if (isActive) {
    navLinkStyle.color = "#252B42";
    navLinkStyle.fontWeight = 500;
  }

  return navLinkStyle;
};

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [modalState, setModalState] = useReducer(
    (prev: IModalState, next: Partial<IModalState>): IModalState => ({
      ...prev,
      ...next,
    }),
    { type: "cart", open: false }
  );
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector<RootState>(
    (state) => state.products
  ) as IProductState;

  const toggleModal = (open?: boolean, type?: ModalType) => {
    setModalState({
      open: open || !modalState.open,
      type: type || modalState.type,
    });
  };

  const getModalList = () => {
    if (modalState.type === "cart") {
      if (products["cart"].length === 0)
        return (
          <Typography {...defaultParagraphStyle} textAlign="center">
            Oops!☹ No item in cart.Add an item to cart
          </Typography>
        );
      return products["cart"].map((item) => {
        return (
          <Cart
            key={item.product.id}
            title={item.product.title}
            image={item.product.thumbnail}
            quantity={item.quantity}
            type="cart"
            onAdd={() =>
              dispatch(
                addProductToCart({
                  product: item.product,
                  quantity: 1,
                })
              )
            }
            onRemove={(value) =>
              dispatch(
                removeProductFromCart({
                  product: item.product,
                  quantity: Number(value) >= 0 ? value : 1,
                })
              )
            }
          />
        );
      });
    }
    if (products["wishlist"].length === 0)
      return (
        <Typography {...defaultParagraphStyle} textAlign="center">
          Oops!☹ No item in wishlist. Add an item to your wishlist
        </Typography>
      );
    return products["wishlist"].map((item) => {
      return (
        <Cart
          key={item.id}
          title={item.title}
          image={item.thumbnail}
          type="wishlist"
          onRemove={() => dispatch(removeProductFromWishlist(item))}
        />
      );
    });
  };

  return (
    <Box
      component="nav"
      padding="1.97rem 2rem 1.56rem 2.38rem"
      display="flex"
      alignItems="center"
      gap="7.44rem"
      maxWidth="90rem"
      margin="0 auto"
      position="relative"
      sx={{
        justifyContent: {
          xs: "space-between",
          lg: "flex-start",
        },
      }}
    >
      <Logo />
      <Box
        component="button"
        border="none"
        bgcolor="transparent"
        onClick={() => setOpenNav(!openNav)}
        sx={{ display: { xs: "inline", lg: "none" } }}
        aria-label="hamburger"
      >
        <Box position="relative" width="1.5rem" height="0.86rem">
          <Image src="/assets/svgs/hamburger.svg" alt="" fill />
        </Box>
      </Box>
      <Box
        display="flex"
        width="100%"
        justifyContent="space-between"
        left={0}
        top="5.5rem"
        sx={{
          position: {
            xs: "absolute",
            lg: "static",
          },
          flexDirection: {
            xs: "column",
            lg: "row",
          },
          bgcolor: {
            xs: "#ffffff",
            lg: "transparent",
          },
          zIndex: {
            xs: openNav ? 99 : -1,
            lg: 0,
          },
          pb: {
            xs: "2.44rem",
            lg: 0,
          },
          visibility: {
            xs: openNav ? "visible" : "hidden",
            lg: "visible",
          },
        }}
      >
        <Box
          display="flex"
          sx={{
            flexDirection: {
              xs: "column",
              lg: "row",
            },
            gap: {
              xs: "1.87rem",
              lg: "1.3rem",
            },
            alignItems: {
              xs: "center",
              lg: "flex-start",
            },
          }}
        >
          <Typography {...getNavLinkStyle()} component={Link} href="/">
            Home
          </Typography>
          <Typography {...getNavLinkStyle(true)} component={Link} href="/">
            Shop
            <Typography
              component="span"
              display="inline-block"
              position="relative"
              width="0.36rem"
              height="0.625rem"
              marginLeft="0.56rem"
            >
              <Image alt="" src="/assets/svgs/caret.svg" fill />
            </Typography>
          </Typography>
          <Typography {...getNavLinkStyle()} component={Link} href="/about">
            About
          </Typography>
          <Typography {...getNavLinkStyle()} component={Link} href="/blog">
            Blog
          </Typography>
          <Typography {...getNavLinkStyle()} component={Link} href="/contact">
            Contact
          </Typography>
          <Typography {...getNavLinkStyle()} component={Link} href="/pages">
            Pages
          </Typography>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          gap="1.87rem"
          sx={{
            flexDirection: {
              xs: "column",
              lg: "row",
            },
            alignItems: {
              xs: "center",
              lg: "flex-start",
            },
            mt: {
              xs: "2.25rem",
              lg: 0,
            },
          }}
        >
          <Typography
            component={Link}
            href="/"
            {...getNavLinkStyle()}
            color="#23A6F0"
          >
            <Typography
              component="span"
              display="inline-block"
              position="relative"
              width="0.75rem"
              height="0.75rem"
              marginRight="0.31rem"
            >
              <Image alt="" src="/assets/svgs/user.svg" fill />
            </Typography>
            Login / Register
          </Typography>
          <Box
            component={Link}
            href="/"
            display="inline-block"
            position="relative"
            width="1rem"
            height="1rem"
          >
            <Image alt="" src="/assets/svgs/search.svg" fill />
          </Box>
          <Box
            {...getNavLinkStyle()}
            color="#23A6F0"
            fontWeight={400}
            display="flex"
            alignItems="center"
            id="cart"
            sx={{ cursor: "pointer" }}
            onClick={() => toggleModal(true, "cart")}
          >
            <Typography
              component="span"
              display="inline-block"
              position="relative"
              width="1rem"
              height="1rem"
              marginRight="0.31rem"
            >
              <Image alt="" src="/assets/svgs/cart.svg" fill />
            </Typography>
            {products.cart.length > 0 && products.cart.length}
          </Box>
          <Box
            {...getNavLinkStyle()}
            color="#23A6F0"
            fontWeight={400}
            display="flex"
            id="wishlist"
            alignItems="center"
            sx={{ cursor: "pointer" }}
            onClick={() => toggleModal(true, "wishlist")}
          >
            <Typography
              component="span"
              display="inline-block"
              position="relative"
              width="1rem"
              height="1rem"
              marginRight="0.31rem"
            >
              <Image alt="" src="/assets/svgs/love.svg" fill />
            </Typography>
            {products.wishlist.length > 0 && products.wishlist.length}
          </Box>
        </Box>
      </Box>
      <Modal
        open={modalState.open}
        onClose={() => toggleModal()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            {...defaultH3Style}
            textTransform="capitalize"
            mb="0.8rem"
          >
            {modalState.type}
          </Typography>
          <Box>{getModalList()}</Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Navbar;