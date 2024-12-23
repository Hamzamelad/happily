import React from "react";
import Header from "@/components/header";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { ModeChanger } from "@/theme/modeChanger";
import Steps from "@/sections/steps";
import Goals from "@/sections/goals";
import Signs from "@/sections/signs";

const Page = () => {
  return (
    <Container maxWidth={"lg"}>
      {/* <Header title="Achivement" /> */}
      {/* <Signs aspect="achivement" /> */}
      <Steps />
      {/* <Goals /> */}
    </Container>
  );
};

export default Page;
