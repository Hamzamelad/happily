"use client";

import { createTheme } from "@mui/material";

const basicTheme = createTheme({
  colorSchemes: {
    light: true,
    dark: true,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {},
      },
    },
  },
});

export const theme = createTheme(basicTheme, {});
