import React, { ReactNode } from "react";
import ProgressCard from "./progress-card";

const Sign = ({ children }: { children: ReactNode }) => {
  return <ProgressCard>{children}</ProgressCard>;
};

export default Sign;
