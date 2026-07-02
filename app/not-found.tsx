import Button from "@/components/ui/Button";

export default function NotFound() {
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
            marginBottom: "1.5rem",
            color: "var(--accent-2)",
          }}
        >
          404
        </p>

        <h1
          style={{
            fontSize: "2rem",
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: "1rem",
          }}
        >
          Page not found
        </h1>

        <p
          style={{
            color: "var(--text-muted)",
            lineHeight: 1.8,
            marginBottom: "2.5rem",
          }}
        >
          お探しのページは見つかりませんでした。
          <br />
          The page you&apos;re looking for doesn&apos;t exist.
        </p>

        <Button href="/ja" variant="primary" className="font-bold">
          ← ホームに戻る / Back to Home
        </Button>
      </div>
    </div>
  );
}
