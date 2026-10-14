export default function Loading() {
  return (
    <main
      role="status"
      aria-live="polite"
      aria-label="Loading Dharma Gyan"
      style={{
        minHeight: "100vh",
        padding: "28px 20px 48px",
        boxSizing: "border-box",
        background: "#080c14",
        color: "#f8fafc",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
        <header
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            paddingBottom: "24px",
            borderBottom: "1px solid #263244",
          }}
        >
          <div
            aria-hidden="true"
            style={{
              width: "44px",
              height: "44px",
              display: "grid",
              placeItems: "center",
              borderRadius: "14px",
              background: "linear-gradient(135deg, #fbbf24, #b45309)",
              fontSize: "24px",
            }}
          >
            🪔
          </div>

          <div>
            <div style={{ fontSize: "20px", fontWeight: 800 }}>
              Dharma Gyan
            </div>
            <div style={{ color: "#94a3b8", fontSize: "12px" }}>
              Hindu Knowledge Library
            </div>
          </div>
        </header>

        <section style={{ paddingTop: "52px" }}>
          <div
            style={{
              width: "140px",
              height: "12px",
              borderRadius: "999px",
              background: "#263244",
              marginBottom: "20px",
            }}
          />

          <div
            style={{
              width: "min(100%, 560px)",
              height: "42px",
              borderRadius: "10px",
              background: "#1e293b",
              marginBottom: "16px",
            }}
          />

          <div
            style={{
              width: "min(100%, 720px)",
              height: "16px",
              borderRadius: "999px",
              background: "#1e293b",
              marginBottom: "10px",
            }}
          />

          <div
            style={{
              width: "min(80%, 560px)",
              height: "16px",
              borderRadius: "999px",
              background: "#1e293b",
              marginBottom: "36px",
            }}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))",
              gap: "20px",
            }}
          >
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                style={{
                  padding: "22px",
                  minHeight: "185px",
                  border: "1px solid #263244",
                  borderRadius: "18px",
                  background: "#111827",
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "14px",
                    background: "#263244",
                    marginBottom: "24px",
                  }}
                />

                <div
                  style={{
                    width: "75%",
                    height: "18px",
                    borderRadius: "999px",
                    background: "#263244",
                    marginBottom: "14px",
                  }}
                />

                <div
                  style={{
                    width: "100%",
                    height: "12px",
                    borderRadius: "999px",
                    background: "#1e293b",
                    marginBottom: "9px",
                  }}
                />

                <div
                  style={{
                    width: "65%",
                    height: "12px",
                    borderRadius: "999px",
                    background: "#1e293b",
                  }}
                />
              </div>
            ))}
          </div>

          <p
            style={{
              textAlign: "center",
              marginTop: "32px",
              color: "#fbbf24",
              fontSize: "14px",
            }}
          >
            Loading knowledge… Please wait.
          </p>
        </section>
      </div>
    </main>
  );
}
