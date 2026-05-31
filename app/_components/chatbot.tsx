"use client";

import { useEffect, useRef } from "react";

export default function Chatbot() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // إضافة العنصر برمجياً عشان TypeScript ميشوفوش
    const widget = document.createElement("elevenlabs-convai");
    widget.setAttribute("agent-id", "agent_6701krcdzz72e9k9fdsxr9va0xgy");
    widget.style.position = "fixed";
    widget.style.bottom = "5px";
    widget.style.right = "5px";
    widget.style.top = "auto";
    widget.style.left = "auto";
    widget.style.zIndex = "9999";
    containerRef.current.appendChild(widget);

    // تحميل الـ script
    const scriptSrc = "https://unpkg.com/@elevenlabs/convai-widget-embed";
    if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
      const script = document.createElement("script");
      script.src = scriptSrc;
      script.async = true;
      script.type = "text/javascript";
      document.body.appendChild(script);
    }

    return () => {
      if (containerRef.current) containerRef.current.innerHTML = "";
    };
  }, []);

  return <div ref={containerRef} />;
}