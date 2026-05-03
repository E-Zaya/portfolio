"use client";

import { useEffect } from "react";

export default function RootError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        background: "#081120",
        color: "#f8fafc",
        fontFamily: "system-ui, sans-serif",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "480px" }}>
        <p
          style={{
            fontSize: "0.6875rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.34em",
            marginBottom: "1rem",
            background: "linear-gradient(90deg, #f87171, #f472b6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Something went wrong
        </p>

        <h1
          style={{
            fontSize: "1.75rem",
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: "1rem",
          }}
        >
          エラーが発生しました
        </h1>

        <p
          style={{
            color: "rgba(226,232,240,0.80)",
            lineHeight: 1.8,
            marginBottom: "2.5rem",
          }}
        >
          予期しないエラーが発生しました。もう一度お試しください。
          <br />
          An unexpected error occurred. Please try again.
        </p>

        <button
          onClick={reset}
          style={{
            padding: "0.875rem 2rem",
            borderRadius: "9999px",
            background: "linear-gradient(135deg, #38bdf8, #818cf8, #a855f7)",
            color: "#fff",
            fontWeight: 700,
            fontSize: "0.875rem",
            cursor: "pointer",
            border: "none",
            boxShadow: "0 8px 32px rgba(56,189,248,0.35)",
          }}
        >
          再試行 / Try Again
        </button>
      </div>
    </div>
  );
}
