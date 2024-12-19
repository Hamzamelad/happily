import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SectionHeader from "@/components/section-header";
import Hoppy from "@/components/hoppy";

const Hoppies = () => {
  return (
    <Box mb={8}>
      <SectionHeader title="Hoppies" />
      <Box display={"flex"} gap={2}>
        <Hoppy />
        <Hoppy />
        <Hoppy />
      </Box>
    </Box>
  );
};

export default Hoppies;
