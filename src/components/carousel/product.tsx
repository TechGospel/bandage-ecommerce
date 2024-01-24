import { Box } from "@mui/material";
import Image from "next/image";
import React, { FC, useState } from "react";

const ProductCarousel: FC<{ images: string[] }> = ({ images }) => {
  const [view, setView] = useState<number>(0);

  const onNext = () => {
    if (view === images.length - 1) return;
    setView((prev) => prev + 1);
  };

  const onPrev = () => {
    if (view === 0) return;
    setView((prev) => prev - 1);
  };

  const selectImage = (image: string) => {
    const index = images.findIndex((img) => img === image);
    setView(index);
  };

  return (
    <Box width="100%" maxWidth="31.625rem">
      <Box width="100%" position="relative" overflow="hidden">
        {view < images.length - 1 && (
          <Box
            role="button"
            position="absolute"
            right="2.19rem"
            bottom="9.16rem"
            zIndex={1}
            onClick={onNext}
            sx={{
              cursor: "pointer",
            }}
            aria-label="greater-than"
          >
            <Box height="2.8rem" width="1.5rem" position="relative">
              <Image
                src="/assets/svgs/gt-1.svg"
                alt=""
                fill
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Box>
        )}
        <Box
          width={`${images.length * 100}%`}
          height="28.125rem"
          display="grid"
          gridTemplateColumns={`repeat(${images.length}, 1fr)`}
          sx={{
            transform: `translateX(-${(100 / images.length) * view}%)`,
            transition: "transform 0.3s linear",
          }}
        >
          {images.map((img, i) => (
            <Box height="100%" position="relative" key={i}>
              <Image src={img} alt="" fill style={{ objectFit: "cover" }} />
            </Box>
          ))}
        </Box>
        {view > 0 && (
          <Box
            role="button"
            position="absolute"
            left="2.19rem"
            bottom="9.16rem"
            zIndex={1}
            onClick={onPrev}
            aria-label="lesser-than"
            sx={{
              cursor: "pointer",
            }}
          >
            <Box
              height="2.8rem"
              width="1.5rem"
              position="relative"
              sx={{
                transform: "rotate(180deg)",
              }}
            >
              <Image
                src="/assets/svgs/gt-1.svg"
                alt=""
                fill
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Box>
        )}
      </Box>
      <Box display="flex" flexWrap="wrap" gap="1.19rem" mt="1.3rem">
        {images
          .filter((_, i) => i !== view)
          .map((img, i) => (
            <Box
              key={i}
              position="relative"
              width="6.25rem"
              height="4.69rem"
              sx={{ cursor: "pointer", opacity: 0.5 }}
              onClick={() => selectImage(img)}
            >
              <Image src={img} alt="" fill style={{ objectFit: "cover" }} />
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default ProductCarousel;