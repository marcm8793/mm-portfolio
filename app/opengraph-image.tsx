import { ImageResponse } from "next/og";

import { publicProfile } from "@/lib/public-profile";

export const alt = "Marc Mansour — developer focused on financial tools";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#f4f7f5",
        color: "#101828",
        padding: "56px 64px",
        border: "2px solid #174ea6",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontSize: 26, fontWeight: 700, letterSpacing: "0.08em" }}>
          MARC MANSOUR
        </span>
        <span style={{ color: "#174ea6", fontSize: 22 }}>FINANCE × SOFTWARE</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 920 }}>
        <div style={{ height: 2, width: 160, background: "#d93d45", marginBottom: 28 }} />
        <div
          style={{
            display: "flex",
            fontSize: 88,
            lineHeight: 0.96,
            letterSpacing: "-0.035em",
          }}
        >
          Developer focused on financial tools.
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        {Array.from({ length: 22 }, (_, index) => (
          <span
            key={index}
            style={{
              width: 16,
              height: 16,
              background: index === 15 || index === 19 ? "#b6f23a" : "#d9dfdc",
              border: "1px solid #c8d0cc",
            }}
          />
        ))}
        <span style={{ marginLeft: 18, color: "#174ea6", fontSize: 20 }}>
          {publicProfile.github.displayUrl}
        </span>
      </div>
    </div>,
    size,
  );
}
