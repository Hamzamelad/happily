"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import { SxProps } from "@mui/system";

type ClickAwayProps = {
  children: React.ReactNode;
  handleClickAway: (event: MouseEvent | TouchEvent) => void;
};

export default function ClickAway({
  children,
  handleClickAway,
}: ClickAwayProps) {
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box sx={{}}>{children}</Box>
    </ClickAwayListener>
  );
}
