import React from "react";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import SectionHeader from "@/components/section-header";

const Related = () => {
  return (
    <Box mb={8}>
      <SectionHeader title="Related" />
      <Box
        sx={{
          typography: "body1",
          "& > :not(style) ~ :not(style)": {
            ml: 2,
          },
        }}
      >
        <Link sx={{ cursor: "pointer" }}>related 1</Link>
        <Link sx={{ cursor: "pointer" }}>related 2</Link>
        <Link sx={{ cursor: "pointer" }}>related 3</Link>
      </Box>
    </Box>
  );
};

export default Related;
