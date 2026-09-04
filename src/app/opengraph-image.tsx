import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#f4f3ee",
          color: "#171717",
          padding: "72px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#6b6b66" }}>
          {site.location}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", width: 64, height: 3, backgroundColor: "#165dff", marginBottom: 28 }} />
          <div style={{ display: "flex", fontSize: 118, lineHeight: 1 }}>
            Koch Norbert
          </div>
          <div style={{ display: "flex", fontSize: 32, marginTop: 24, color: "#6b6b66" }}>
            {site.jobTitle}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
