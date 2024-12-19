import React from "react";
import Box from "@mui/material/Box";
import Goal from "@/components/goal";
import SectionHeader from "@/components/section-header";

const Goals = () => {
  return (
    <Box mb={4}>
      <SectionHeader title="Goals" />
      <Box display={"flex"} flexDirection={"column"} gap={2}>
        <Goal />
        <Goal />
      </Box>
    </Box>
  );
};

export default Goals;
