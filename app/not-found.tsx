import Link from "next/link";

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
            marginBottom: "1.5rem",
            background: "linear-gradient(90deg, #38bdf8, #818cf8, #a855f7)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
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
            color: "rgba(226,232,240,0.80)",
            lineHeight: 1.8,
            marginBottom: "2.5rem",
          }}
        >
          お探しのページは見つかりませんでした。
          <br />
          The page you&apos;re looking for doesn&apos;t exist.
        </p>

        <Link
          href="/ja"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.875rem 2rem",
            borderRadius: "9999px",
            background: "linear-gradient(135deg, #38bdf8, #818cf8, #a855f7)",
            color: "#fff",
            fontWeight: 700,
            fontSize: "0.875rem",
            textDecoration: "none",
            boxShadow: "0 8px 32px rgba(56, 189, 248, 0.35)",
          }}
        >
          ← ホームに戻る / Back to Home
        </Link>
      </div>
    </div>
  );
}
