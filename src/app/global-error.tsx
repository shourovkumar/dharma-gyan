"use client";

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({
  error,
  reset,
}: GlobalErrorProps) {
  return (
    <html lang="bn">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          background:
            "radial-gradient(ellipse at top, #31230f 0%, #111827 45%, #080c14 100%)",
          color: "#f8fafc",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <main
          role="alert"
          style={{
            minHeight: "100vh",
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "32px 20px",
            textAlign: "center",
          }}
        >
          <section style={{ width: "100%", maxWidth: "600px" }}>
            <div
              aria-hidden="true"
              style={{ fontSize: "64px", marginBottom: "20px" }}
            >
              🪔
            </div>

            <p
              style={{
                color: "#fbbf24",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "4px",
                marginBottom: "16px",
              }}
            >
              DHARMA GYAN
            </p>

            <h1
              style={{
                fontSize: "clamp(28px, 6vw, 42px)",
                lineHeight: 1.3,
                margin: "0 0 18px",
              }}
            >
              We encountered a serious error
            </h1>

            <p
              style={{
                color: "#cbd5e1",
                fontSize: "16px",
                lineHeight: 1.8,
                margin: "0 0 12px",
              }}
            >
              ওয়েবসাইটে একটি সমস্যা হয়েছে। আবার চেষ্টা করো।
            </p>

            <p
              style={{
                color: "#cbd5e1",
                fontSize: "16px",
                lineHeight: 1.8,
                margin: "0 0 28px",
              }}
            >
              वेबसाइट में एक समस्या हुई है। कृपया फिर से प्रयास करें।
            </p>

            {process.env.NODE_ENV === "development" &&
              error.digest && (
                <p
                  style={{
                    color: "#94a3b8",
                    fontSize: "12px",
                    marginBottom: "20px",
                  }}
                >
                  Error reference: {error.digest}
                </p>
              )}

            <button
              type="button"
              onClick={reset}
              style={{
                border: "none",
                cursor: "pointer",
                borderRadius: "12px",
                padding: "14px 26px",
                background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
                color: "#111827",
                fontSize: "15px",
                fontWeight: 800,
              }}
            >
              Try Again
            </button>

            <p
              style={{
                color: "#64748b",
                fontSize: "12px",
                marginTop: "36px",
              }}
            >
              Discover knowledge. Explore Dharma.
            </p>
          </section>
        </main>
      </body>
    </html>
  );
}
