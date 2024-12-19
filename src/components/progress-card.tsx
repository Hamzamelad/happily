"use client";

import React, { ReactNode, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularWithValueLabel from "./circular-progress";
import { motion } from "motion/react";
import ProgressSlider from "./progress-slider";

const ProgressCard = ({
  children,
  size,
}: {
  children: ReactNode;
  size?: number;
}) => {
  const [value, setValue] = React.useState<number>(50);

  const handleChange = (event: Event, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      display={"flex"}
      gap={2}
      alignItems={"center"}
      justifyContent={"space-between"}
      p={2}
      flexGrow={1}
      borderRadius={3}
      minHeight={60}
      sx={{
        border: "solid 1px",
        "&:hover #cont": {
          visibility: "hidden",
        },
        "&:hover #slider": {
          visibility: "visible",
        },
      }}
    >
      <Box
        flexGrow={1}
        sx={{
          position: "relative",
        }}
      >
        <div id="cont">{children}</div>
        <div
          id="slider"
          className="absolute inset-0 invisible flex items-center *:"
        >
          <ProgressSlider setValue={setValue} />
        </div>
      </Box>

      <CircularWithValueLabel size={size} value={value} />
    </Box>
  );
};

export default ProgressCard;
