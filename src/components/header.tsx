"use client";

import { useRouter } from "next/navigation";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AspectRating from "./Rating";
import { IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import Typhography from "@mui/material/Typography";

export type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  const router = useRouter();

  return (
    <Box className="" mt={2} mb={4}>
      <Box>
        <IconButton aria-label="back" size="large" onClick={router.back}>
          <KeyboardBackspaceIcon />
        </IconButton>
      </Box>
      <Box mt={1} display={"flex"} justifyContent={"space-between"}>
        <Typhography variant="h4">{title}</Typhography>
        <AspectRating />
        <div />
      </Box>
    </Box>
  );
};

export default Header;
