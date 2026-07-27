"use client";

import { useEffect } from "react";

export function ClientBoot() {
  useEffect(() => {
    if (document.getElementById("christian-site-script")) return;
    const script = document.createElement("script");
    script.id = "christian-site-script";
    script.src = "/script.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return null;
}
