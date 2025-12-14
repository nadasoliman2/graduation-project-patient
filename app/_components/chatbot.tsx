"use client";

import { useEffect } from "react";

export default function Chatbot() {
  useEffect(() => {
    const scriptSrc = "https://unpkg.com/@elevenlabs/convai-widget-embed";

    if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
      const script = document.createElement("script");
      script.src = scriptSrc;
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        const widget = document.querySelector("elevenlabs-convai") as HTMLElement;
        if (widget) {
          widget.style.position = "fixed";
          widget.style.bottom = "5px";
          widget.style.right = "5px";
          widget.style.top = "auto";
          widget.style.left = "auto";
          widget.style.zIndex = "9999";
        }
      };
    }
  }, []);

  return (
    <div>
      <elevenlabs-convai
        agent-id="agent_8201k95mrvfef4xtvfvpg2bmses8"
        style={{ width: "350px", height: "500px" }}
      ></elevenlabs-convai>
    </div>
  );
}
