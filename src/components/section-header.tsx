import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export type SectionHeaderProps = {
  title: string;
};

const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <Box mb={3}>
      <Typography variant="h5" mb={1}>
        {title}
      </Typography>
      <Divider />
    </Box>
  );
};

export default SectionHeader;
