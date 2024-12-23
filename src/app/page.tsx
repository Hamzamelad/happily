"use client";

import Main from "@/sections/main";
import { useEffect } from "react";
import useNetworkStatus from "../hooks/useNetworkStatus";

export default function Home() {
  const { isOnline } = useNetworkStatus();
  return (
    <div className="flex h-screen overflow-hidden items-center justify-center">
      {isOnline ? <span>online</span> : <span>offline</span>}
      <Main />
    </div>
  );
}
