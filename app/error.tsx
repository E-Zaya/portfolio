"use client";

import { useEffect } from "react";
import Button from "@/components/ui/Button";

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
        background: "var(--background)",
        color: "var(--foreground)",
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
            color: "var(--color-error)",
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
            color: "var(--text-muted)",
            lineHeight: 1.8,
            marginBottom: "2.5rem",
          }}
        >
          予期しないエラーが発生しました。もう一度お試しください。
          <br />
          An unexpected error occurred. Please try again.
        </p>

        <Button onClick={reset} variant="primary" className="font-bold">
          再試行 / Try Again
        </Button>
      </div>
    </div>
  );
}
