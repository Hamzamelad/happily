import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";

const Hoppy = () => {
  return (
    <Box
      position={"relative"}
      display={"flex"}
      alignItems={"center"}
      gap={1}
      flexGrow={1}
      px={2}
      borderRadius={3}
      sx={{ border: "solid 1px" }}
    >
      <LocalLibraryIcon />
      <Typography>reading</Typography>
      <Checkbox sx={{ ml: "auto" }} />
    </Box>
  );
};

export default Hoppy;
