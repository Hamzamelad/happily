import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import meditation from "../../public/how-to-meditate-3_840x.webp";

const ContectViewer = () => {
  return (
    <Box display={"flex"} gap={2}>
      <Stack flexGrow={1} spacing={1} maxWidth={300} my={"auto"}>
        <Button>item 1</Button>
        <Button>item 2</Button>
        <Button>item 3</Button>
      </Stack>
      <Box flexGrow={1}>
        <Card sx={{ width: "60%", height: "100%", mx: "auto" }}>
          <CardMedia
            title="meditation"
            image={meditation.src}
            sx={{ width: "100%", aspectRatio: "1.5 / 1" }}
          />
        </Card>
      </Box>
    </Box>
  );
};

export default ContectViewer;
