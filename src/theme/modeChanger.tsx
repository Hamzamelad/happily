"use client";

import { useColorScheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined";

export function ModeChanger() {
  const { mode, setMode } = useColorScheme();

  if (!mode) {
    return null;
  }
  return (
    <IconButton
      onClick={() => (mode == "dark" ? setMode("light") : setMode("dark"))}
      sx={{ color: "text.secondary" }}
    >
      {mode == "dark" ? <LightModeOutlinedIcon /> : <NightlightOutlinedIcon />}
    </IconButton>
  );
}
