import { ButtonProps, Button as MuiButton } from "@mui/material";
import React, { FC } from "react";

const Button: FC<ButtonProps> = ({ sx, ...rest }) => {
  return (
    <MuiButton
      {...rest}
      sx={{
        color: "#ffffff",
        borderRadius: "0.3125rem",
        boxShadow: "none",
        ...sx,
      }}
    />
  );
};

export default Button;