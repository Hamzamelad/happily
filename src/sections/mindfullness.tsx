import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SectionHeader from "@/components/section-header";

import ContectViewer from "@/components/content-viewer";

const Mindfullness = () => {
  return (
    <Box mb={8}>
      <SectionHeader title="Mindfullness" />
      <Box>
        <ContectViewer />
      </Box>
    </Box>
  );
};

export default Mindfullness;
