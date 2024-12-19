import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

export default function ProgressSlider({
  value,
  setValue,
}: {
  value?: number;
  setValue: (arg: number) => void;
}) {
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  return (
    <Box flexGrow={1}>
      <Slider
        defaultValue={60}
        onChange={handleChange}
        aria-label="Default"
        valueLabelDisplay="auto"
      />
    </Box>
  );
}
