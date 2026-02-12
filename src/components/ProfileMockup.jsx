import C from "../constants/colors";

const platformPills = [
  { name: "YouTube", color: "#CC0000" },
  { name: "Spotify", color: "#1DB954" },
  { name: "Instagram", color: "#C13584" },
  { name: "TikTok", color: "#25F4EE" },
  { name: "Podcasts", color: C.burgundy },
  { name: "Books", color: C.terracotta },
];

const tabs = ["About", "Videos", "Podcasts", "Books", "Courses"];

/**
 * Visual mockup of a Lamma+ creator profile page — showing
 * platform pills, content tabs, AI summary, and video grid.
 * Matches the browser-chrome pattern from PlatformPreview.
 */
export default function ProfileMockup() {
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
          lammaplus.app/creator/khalid-rashid
        </span>
      </div>

      {/* ── Hero banner gradient ── */}
      <div
        style={{
          height: "52px",
          background: `linear-gradient(135deg, ${C.teal}, ${C.tealMid}, ${C.dustyTeal})`,
          position: "relative",
        }}
      />

      {/* ── Profile content ── */}
      <div style={{ padding: "0 18px 18px" }}>
        {/* Avatar + name + actions */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: "12px",
            marginTop: "-22px",
            marginBottom: "12px",
          }}
        >
          <img
            src="/avatar-omar.png"
            alt="Khalid Rashid"
            style={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              objectFit: "cover",
              border: `3px solid ${C.warmWhite}`,
              flexShrink: 0,
            }}
          />
          <div style={{ flex: 1, paddingBottom: "2px" }}>
            <div
              style={{
                fontWeight: 700,
                fontSize: "15px",
                color: C.text,
                lineHeight: 1.2,
              }}
            >
              Khalid Rashid
            </div>
            <span
              style={{
                padding: "2px 8px",
                borderRadius: "10px",
                background: `${C.teal}12`,
                color: C.teal,
                fontSize: "10px",
                fontWeight: 600,
              }}
            >
              Scholar & Educator
            </span>
          </div>
          <div
            style={{
              display: "flex",
              gap: "6px",
              paddingBottom: "2px",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                padding: "5px 12px",
                borderRadius: "7px",
                background: C.teal,
                color: C.cream,
                fontSize: "10px",
                fontWeight: 600,
              }}
            >
              Follow
            </span>
            <span
              style={{
                padding: "5px 10px",
                borderRadius: "7px",
                border: `1px solid ${C.border}`,
                color: C.textMid,
                fontSize: "10px",
                fontWeight: 600,
              }}
            >
              Share
            </span>
          </div>
        </div>

        {/* AI Summary card */}
        <div
          style={{
            padding: "10px 12px",
            background: C.cream,
            borderRadius: "8px",
            marginBottom: "12px",
            fontSize: "11px",
            lineHeight: 1.6,
            color: C.textMid,
          }}
        >
          <span
            style={{
              color: C.gold,
              fontSize: "10px",
              fontWeight: 700,
              marginRight: "6px",
            }}
          >
            ✦ AI Summary
          </span>
          Renowned Islamic scholar specializing in Quranic studies and Arabic
          linguistics with 15+ years of teaching experience across multiple
          continents...
        </div>

        {/* Platform presence pills */}
        <div
          style={{
            display: "flex",
            gap: "4px",
            marginBottom: "14px",
            flexWrap: "wrap",
          }}
        >
          {platformPills.map((p) => (
            <span
              key={p.name}
              style={{
                padding: "3px 8px",
                borderRadius: "10px",
                background: `${p.color}12`,
                border: `1px solid ${p.color}20`,
                color: p.color,
                fontSize: "9px",
                fontWeight: 600,
              }}
            >
              {p.name}
            </span>
          ))}
        </div>

        {/* Content tabs */}
        <div
          style={{
            display: "flex",
            gap: "0",
            borderBottom: `1px solid ${C.border}`,
            marginBottom: "12px",
          }}
        >
          {tabs.map((tab, i) => (
            <span
              key={tab}
              style={{
                padding: "7px 10px",
                fontSize: "10px",
                fontWeight: i === 1 ? 700 : 500,
                color: i === 1 ? C.teal : C.textLight,
                borderBottom:
                  i === 1
                    ? `2px solid ${C.gold}`
                    : "2px solid transparent",
              }}
            >
              {tab}
              {i === 1 && (
                <span
                  style={{
                    marginLeft: "4px",
                    fontSize: "8px",
                    color: C.textLight,
                    fontWeight: 500,
                  }}
                >
                  24
                </span>
              )}
            </span>
          ))}
        </div>

        {/* Video grid (2×2) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "6px",
          }}
        >
          {[
            { title: "Understanding Surah Al-Kahf", dur: "42:15" },
            { title: "Arabic Grammar Basics", dur: "28:03" },
            { title: "Tafsir Series Ep. 12", dur: "1:04:22" },
            { title: "Ramadan Reflections", dur: "15:47" },
          ].map((v, i) => (
            <div key={i}>
              <div
                style={{
                  aspectRatio: "16/9",
                  borderRadius: "6px",
                  background: `linear-gradient(135deg, ${C.teal}${25 + i * 8}, ${C.dustyTeal}${18 + i * 6})`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                {/* Play button */}
                <div
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.9)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: 0,
                      height: 0,
                      borderTop: "5px solid transparent",
                      borderBottom: "5px solid transparent",
                      borderLeft: `8px solid ${C.teal}`,
                      marginLeft: "2px",
                    }}
                  />
                </div>
                {/* Duration badge */}
                <span
                  style={{
                    position: "absolute",
                    bottom: 4,
                    right: 4,
                    background: "rgba(0,0,0,0.7)",
                    color: "#fff",
                    fontSize: "8px",
                    fontWeight: 600,
                    padding: "1px 4px",
                    borderRadius: "3px",
                  }}
                >
                  {v.dur}
                </span>
              </div>
              <div
                style={{
                  fontSize: "9px",
                  color: C.textMid,
                  fontWeight: 500,
                  marginTop: "4px",
                  lineHeight: 1.3,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {v.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
