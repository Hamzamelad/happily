"use client";

import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SectionHeader from "@/components/section-header";
import Sign from "@/components/sign";
import type { Sign as SignType } from "@prisma/client";

const Signs = ({ aspect }: { aspect: string }) => {
  const [signs, setSigns] = useState<SignType[]>([]);

  useEffect(() => {
    (async () => {
      fetch(`http://localhost:3000/api/signs?aspect=${aspect}`)
        .then((res) => res.json())
        .then((data) => {
          setSigns(data.data);
        })
        .catch((error) => {
          throw error;
        });
    })();
  }, []);

  return (
    <Box mb={8}>
      <SectionHeader title="Signs" />
      <Box display={"flex"} gap={2}>
        {signs &&
          signs.map((el) => (
            <Sign>
              <Typography>{el.text}</Typography>
            </Sign>
          ))}
      </Box>
    </Box>
  );
};

export default Signs;
