import { ImageResponse } from "next/og"

export const size = { width: 32, height: 32 }
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 8,
          background: "linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%)",
        }}
      >
        <span
          style={{
            fontSize: 16,
            fontWeight: 700,
            color: "#ffffff",
            fontFamily: "Inter, system-ui, sans-serif",
            letterSpacing: "-0.5px",
          }}
        >
          SY
        </span>
      </div>
    ),
    { ...size }
  )
}
