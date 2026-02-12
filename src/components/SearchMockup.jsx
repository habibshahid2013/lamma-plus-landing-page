import C from "../constants/colors";

/**
 * Visual mockup of the Lamma+ Discover page — showing the
 * hybrid search, active filters, search modes, and result cards.
 * Matches the browser-chrome pattern from PlatformPreview.
 */
export default function SearchMockup() {
  return (
    <div
      style={{
        background: C.warmWhite,
        borderRadius: "18px",
        border: `1px solid ${C.border}`,
        overflow: "hidden",
        boxShadow:
          "0 32px 64px rgba(27,60,60,0.10), 0 4px 16px rgba(27,60,60,0.05)",
      }}
    >
      {/* ── Browser toolbar ── */}
      <div
        style={{
          padding: "13px 18px",
          borderBottom: `1px solid ${C.border}`,
          display: "flex",
          alignItems: "center",
          gap: "6px",
          background: C.cream,
        }}
      >
        <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#FF6259" }} />
        <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#FFC02F" }} />
        <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#29CE42" }} />
        <span
          style={{
            marginLeft: "12px",
            color: C.textLight,
            fontSize: "11px",
            fontFamily: "'DM Mono', monospace",
          }}
        >
          lammaplus.app/discover
        </span>
      </div>

      {/* ── Content ── */}
      <div style={{ padding: "18px" }}>
        {/* Search bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "10px 14px",
            borderRadius: "10px",
            border: `2px solid ${C.teal}25`,
            background: C.warmWhite,
            marginBottom: "10px",
          }}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke={C.textLight}
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <span style={{ color: C.text, fontSize: "13px", fontWeight: 500 }}>
            Quran teacher for beginners
          </span>
          <span
            style={{
              marginLeft: "auto",
              color: C.dustyTeal,
              fontSize: "9px",
              fontWeight: 700,
              padding: "2px 8px",
              background: `${C.dustyTeal}12`,
              borderRadius: "4px",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
          >
            Semantic
          </span>
        </div>

        {/* Search mode tabs */}
        <div style={{ display: "flex", gap: "3px", marginBottom: "12px" }}>
          {["Keyword", "Semantic", "Hybrid"].map((mode, i) => (
            <span
              key={mode}
              style={{
                padding: "4px 10px",
                borderRadius: "6px",
                background: i === 1 ? C.teal : "transparent",
                color: i === 1 ? C.gold : C.textLight,
                fontSize: "10px",
                fontWeight: 600,
                border: i !== 1 ? `1px solid ${C.border}` : "1px solid transparent",
              }}
            >
              {mode}
            </span>
          ))}
        </div>

        {/* Active filter badges */}
        <div
          style={{
            display: "flex",
            gap: "5px",
            marginBottom: "12px",
            flexWrap: "wrap",
          }}
        >
          {[
            { label: "English", color: C.dustyTeal },
            { label: "Americas", color: C.terracotta },
            { label: "Scholar", color: C.burgundy },
            { label: "Quran", color: C.teal },
          ].map((f) => (
            <span
              key={f.label}
              style={{
                padding: "3px 9px",
                borderRadius: "12px",
                background: `${f.color}12`,
                border: `1px solid ${f.color}25`,
                color: f.color,
                fontSize: "10px",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              {f.label}
              <span style={{ opacity: 0.4, fontSize: "9px", cursor: "pointer" }}>
                ×
              </span>
            </span>
          ))}
        </div>

        {/* Results count */}
        <div
          style={{
            fontSize: "11px",
            color: C.textLight,
            marginBottom: "10px",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <span style={{ fontWeight: 700, color: C.teal }}>23</span> creators
          found
          <span
            style={{
              marginLeft: "auto",
              fontSize: "9px",
              color: C.textLight,
              padding: "2px 6px",
              background: C.cream,
              borderRadius: "4px",
            }}
          >
            Sort: Relevance
          </span>
        </div>

        {/* Creator result cards */}
        {[
          {
            name: "Khalid Rashid",
            role: "Scholar · Quran",
            score: 97,
            avatar: "/avatar-omar.png",
            platforms: ["YouTube", "Spotify"],
          },
          {
            name: "Amina Bashar",
            role: "Educator · Tajweed",
            score: 94,
            avatar: "/avatar-yasmin.png",
            platforms: ["YouTube", "Podcasts"],
          },
          {
            name: "Ibrahim Zubair",
            role: "Scholar · Arabic",
            score: 96,
            avatar: "/avatar-mufti.png",
            platforms: ["YouTube", "Books"],
          },
        ].map((r, i) => (
          <div
            key={i}
            style={{
              padding: "10px 12px",
              marginBottom: "4px",
              background: i === 0 ? C.goldGlow : "transparent",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              border:
                i === 0
                  ? `1px solid ${C.gold}28`
                  : "1px solid transparent",
            }}
          >
            <img
              src={r.avatar}
              alt={r.name}
              style={{
                width: 34,
                height: 34,
                borderRadius: "50%",
                objectFit: "cover",
                border: `2px solid ${C.border}`,
                flexShrink: 0,
              }}
            />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  color: C.text,
                  fontWeight: 600,
                  fontSize: "12px",
                }}
              >
                {r.name}
              </div>
              <div
                style={{
                  color: C.textLight,
                  fontSize: "10px",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                {r.role}
                <span style={{ display: "flex", gap: "3px" }}>
                  {r.platforms.map((p) => (
                    <span
                      key={p}
                      style={{
                        fontSize: "8px",
                        padding: "1px 5px",
                        borderRadius: "6px",
                        background: `${C.teal}0C`,
                        color: C.textLight,
                        fontWeight: 500,
                      }}
                    >
                      {p}
                    </span>
                  ))}
                </span>
              </div>
            </div>
            <div
              style={{
                background: C.teal,
                color: C.gold,
                padding: "3px 7px",
                borderRadius: "5px",
                fontSize: "10px",
                fontWeight: 700,
                flexShrink: 0,
              }}
            >
              {r.score}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
