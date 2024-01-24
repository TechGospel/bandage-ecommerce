import { defaultH3Style, defaultH4Style, defaultParagraphStyle } from "@/utils/constants";
import { Box, BoxProps, Typography, TypographyProps } from "@mui/material";
import React, { FC } from "react";

interface ISectionTitle extends BoxProps {
  section: string;
  title: string;
  description?: string;
  sectionProps?: TypographyProps;
  titleProps?: TypographyProps;
  descriptionProps?: TypographyProps;
}

const SectionTitle: FC<ISectionTitle> = ({
  section,
  title,
  description,
  titleProps,
  descriptionProps,
  sectionProps,
  ...rest
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="0.62rem"
      textAlign="center"
      {...rest}
    >
      <Typography
        {...defaultH4Style}
        color="#737373"
        {...sectionProps}
      >
        {section}
      </Typography>
      <Typography
        {...defaultH3Style}
        color="#252B42"
        {...titleProps}
      >
        {title}
      </Typography>
      {description && (
        <Typography
          {...defaultParagraphStyle}
          color="#737373"
          {...descriptionProps}
        >
          {description}
        </Typography>
      )}
    </Box>
  );
};

export default SectionTitle;