"use client";

import { useEffect } from "react";
import WOW from "wowjs";
import "animate.css";

export default function WowClient() {
  useEffect(() => {
    new WOW.WOW({ live: false }).init();
  }, []);

  return null;
}
