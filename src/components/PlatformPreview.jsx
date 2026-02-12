import C from "../constants/colors";

const rows = [
  { name: "Amina Bashar", role: "Author & Speaker", score: 94, avatar: "/avatar-yasmin.png" },
  { name: "Khalid Rashid", role: "Scholar & Educator", score: 97, avatar: "/avatar-omar.png" },
  { name: "Ibrahim Zubair", role: "Global Scholar", score: 96, avatar: "/avatar-mufti.png" },
  { name: "Tariq Hasan", role: "Linguist & Educator", score: 93, avatar: "/avatar-nouman.png" },
];

const platforms = [
  { n: "YouTube", c: "#CC0000" },
  { n: "TikTok", c: C.teal },
  { n: "Podcasts", c: C.burgundy },
  { n: "Books", c: C.terracotta },
  { n: "Wikipedia", c: C.dustyTeal },
];

const avatarGradients = [
  `linear-gradient(135deg, ${C.dustyTeal}40, ${C.terracotta}30)`,
  `linear-gradient(135deg, ${C.teal}40, ${C.gold}30)`,
  `linear-gradient(135deg, ${C.burgundy}30, ${C.sand}40)`,
  `linear-gradient(135deg, ${C.terracotta}35, ${C.teal}30)`,
];

/**
 * Browser-chrome mockup showing the Lamma+ discover view
 * with creator cards, platform tags, and quality scores.
 */
export default function PlatformPreview() {
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
        <div
          style={{
            width: 9,
            height: 9,
            borderRadius: "50%",
            background: "#FF6259",
          }}
        />
        <div
          style={{
            width: 9,
            height: 9,
            borderRadius: "50%",
            background: "#FFC02F",
          }}
        />
        <div
          style={{
            width: 9,
            height: 9,
            borderRadius: "50%",
            background: "#29CE42",
          }}
        />
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
        {/* Platform tags */}
        <div
          style={{
            display: "flex",
            gap: "5px",
            marginBottom: "14px",
            flexWrap: "wrap",
          }}
        >
          {platforms.map((t) => (
            <span
              key={t.n}
              style={{
                padding: "3px 10px",
                borderRadius: "12px",
                background: `${t.c}10`,
                border: `1px solid ${t.c}22`,
                color: t.c,
                fontSize: "11px",
                fontWeight: 600,
              }}
            >
              {t.n}
            </span>
          ))}
        </div>

        {/* Creator rows */}
        {rows.map((r, i) => (
          <div
            key={i}
            style={{
              padding: "12px 14px",
              marginBottom: i < rows.length - 1 ? "4px" : 0,
              background: i === 0 ? C.goldGlow : "transparent",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              border:
                i === 0
                  ? `1px solid ${C.gold}28`
                  : "1px solid transparent",
              transition: "background 0.2s",
            }}
          >
            {/* Avatar */}
            <img
              src={r.avatar}
              alt={r.name}
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                objectFit: "cover",
                border: `2px solid ${avatarGradients[i] ? C.border : C.teal}`,
                flexShrink: 0,
              }}
            />
            {/* Info */}
            <div style={{ flex: 1 }}>
              <div
                style={{ color: C.text, fontWeight: 600, fontSize: "13px" }}
              >
                {r.name}
              </div>
              <div style={{ color: C.textLight, fontSize: "11px" }}>
                {r.role}
              </div>
            </div>
            {/* Score */}
            <div
              style={{
                background: C.teal,
                color: C.gold,
                padding: "3px 8px",
                borderRadius: "6px",
                fontSize: "11px",
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
