import { ReactNode } from "react";
import { ThemeProvider } from "@mui/material";
import { theme } from "./create-theme";

export const MuiThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={theme} defaultMode="light">
      {children}
    </ThemeProvider>
  );
};
