import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import React, { FC } from "react";
import { ModalType } from "../../types";
import { defaultParagraphStyle } from "@/utils/constants";
import Button from "../buttons/button";

const ProductCart: FC<{
  image: string;
  title: string;
  quantity?: number;
  type: ModalType;
  onAdd?: () => void;
  onRemove?: (quantity?: number) => void;
}> = ({ image, title, quantity, type, onAdd, onRemove }) => {
  const theme = useTheme();
  return (
    <Box
      display="flex"
      gap="0.87rem"
      py="0.5rem"
      borderBottom="1px solid #e8e8e8"
    >
      <Box height="5rem" width="100%" maxWidth="5rem" position="relative">
        <Image src={image} alt="" fill style={{ objectFit: "cover" }} />
      </Box>
      <Box width="100%">
        <Typography
          color="#252B42"
          {...defaultParagraphStyle}
          fontWeight={700}
          mb="1rem"
        >
          {title}
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gap="0.88rem"
        >
          {type === "cart" && (
            <Box>
              <Button
                onClick={() => onRemove?.()}
                disabled={quantity === 1}
                sx={{ color: theme.palette.primary.main, fontSize: "1.5rem" }}
              >
                &minus;
              </Button>
              <Typography {...defaultParagraphStyle} component="span">
                {quantity}
              </Typography>
              <Button
                onClick={() => onAdd?.()}
                sx={{ color: theme.palette.primary.main, fontSize: "1.5rem" }}
              >
                +
              </Button>
            </Box>
          )}
          <Button
            sx={{ color: theme.palette.error.main }}
            onClick={() => onRemove?.(0)}
          >
            Remove
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCart;