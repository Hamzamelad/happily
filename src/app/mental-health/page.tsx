import React from "react";
import Header from "@/components/header";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { ModeChanger } from "@/theme/modeChanger";
import Steps from "@/sections/steps";
import Goals from "@/sections/goals";
import Signs from "@/sections/signs";
import Mindfullness from "@/sections/mindfullness";
import Hoppies from "@/sections/hoppies";
import Related from "@/sections/related";

const Page = () => {
  return (
    <Container maxWidth={"lg"} sx={{ mb: 4 }}>
      <Header title="Mental Health" />
      <Signs />
      <Mindfullness />
      <Hoppies />
      <Related />
    </Container>
  );
};

export default Page;
