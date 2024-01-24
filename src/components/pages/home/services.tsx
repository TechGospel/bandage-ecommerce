import Offer, { OfferProps } from "@/components/misc/offer";
import SectionTitle from "@/components/misc/section-title";
import SectionLayout from "@/layouts/section";
import { Box } from "@mui/material";
import React, { useMemo } from "react";

const Services = () => {
  const data: OfferProps[] = useMemo(() => {
    return [
      {
        title: "Easy Wins",
        description: "Get your best looking smile now!",
        image: "/assets/svgs/easy-wins.svg",
      },
      {
        title: "Concrete",
        description:
          "Defalcate is most focused in helping you discover your most beautiful smile",
        image: "/assets/svgs/concrete.svg",
      },
      {
        title: "Hack Growth",
        description: "Overcame any hurdle or any other problem.",
        image: "/assets/svgs/growth.svg",
      },
    ];
  }, []);
  return (
    <SectionLayout padding="5rem 0">
      <SectionTitle
        section="Featured Products"
        title="BESTSELLER PRODUCTS"
        description="Problems trying to resolve the conflict between"
        mb="5rem"
      />
      <Box display="flex" gap="2.69rem" flexWrap="wrap" justifyContent="center">
        {data.map((offerProps) => (
          <Offer key={offerProps.title} {...offerProps} />
        ))}
      </Box>
    </SectionLayout>
  );
};

export default Services;