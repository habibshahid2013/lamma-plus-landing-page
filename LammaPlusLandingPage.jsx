import { useState, useEffect, useRef } from "react";

/* ─── BRAND PALETTE (extracted from logo sheets) ─── */
const C = {
  // Primary
  teal: "#1B3C3C",
  tealMid: "#2A5252",
  tealSoft: "#3A6666",
  gold: "#D4A832",
  goldBright: "#E8B931",
  goldDark: "#B8922A",
  goldGlow: "rgba(212, 168, 50, 0.10)",

  // Warm neutrals
  cream: "#F5F0E5",
  creamMid: "#EDE6D6",
  warmWhite: "#FAF8F2",
  sand: "#B5AD82",
  sandSoft: "rgba(181, 173, 130, 0.12)",

  // Accents
  terracotta: "#C47A3A",
  burgundy: "#7A3045",
  dustyTeal: "#6B9A9A",
  rust: "#9A5C32",

  // Text
  text: "#1A2822",
  textMid: "#4A5A50",
  textLight: "#7A8A7E",
  textOnDark: "#D4D0C4",
  
  // Borders
  border: "rgba(27, 60, 60, 0.09)",
  borderDark: "rgba(180, 173, 130, 0.15)",
};

// Logo as base64-encoded inline (the teal on transparent version from the PNG)
// Using the actual uploaded file path for the logo
const LOGO_URL = "/lamma-logo.png";

/* ─── COUNTER ─── */
function Counter({ target, suffix = "", dur = 2200 }) {
  const [v, setV] = useState(0);
  const ref = useRef(null);
  const ran = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !ran.current) {
          ran.current = true;
          const t0 = Date.now();
          const go = () => {
            const p = Math.min((Date.now() - t0) / dur, 1);
            setV(Math.floor((1 - Math.pow(1 - p, 3)) * target));
            if (p < 1) requestAnimationFrame(go);
          };
          go();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target, dur]);
  return <span ref={ref}>{v.toLocaleString()}{suffix}</span>;
}

/* ─── WAITLIST ─── */
function Waitlist({ dark = false }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [busy, setBusy] = useState(false);

  const go = (e) => {
    e.preventDefault();
    if (!email) return;
    setBusy(true);
    setTimeout(() => { setDone(true); setBusy(false); }, 1100);
  };

  if (done) {
    return (
      <div style={{
        textAlign: "center",
        padding: "28px 24px",
        background: dark ? C.sandSoft : C.goldGlow,
        borderRadius: "14px",
        border: `1px solid ${dark ? C.sand + "30" : C.gold + "35"}`,
      }}>
        <div style={{ fontSize: "24px", marginBottom: "6px", color: C.gold }}>✦</div>
        <h3 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "21px",
          color: dark ? C.cream : C.teal,
          marginBottom: "6px",
        }}>You're on the list</h3>
        <p style={{ color: dark ? C.textOnDark : C.textMid, fontSize: "14px", lineHeight: 1.5 }}>
          We'll notify you when Lamma+ opens to the public.
        </p>
        <div style={{ display: "flex", gap: "8px", justifyContent: "center", marginTop: "16px", flexWrap: "wrap" }}>
          {["Instagram", "TikTok", "X", "LinkedIn", "Facebook"].map((p) => (
            <a key={p} href="#" style={{
              color: C.gold,
              fontSize: "11px",
              fontWeight: 600,
              textDecoration: "none",
              padding: "4px 12px",
              border: `1px solid ${C.gold}40`,
              borderRadius: "16px",
              transition: "all 0.3s",
            }}
              onMouseEnter={(e) => { e.target.style.background = C.gold; e.target.style.color = C.teal; }}
              onMouseLeave={(e) => { e.target.style.background = "transparent"; e.target.style.color = C.gold; }}
            >{p}</a>
          ))}
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={go} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <div style={{
        display: "flex",
        borderRadius: "10px",
        overflow: "hidden",
        border: `2px solid ${dark ? C.sand + "35" : C.teal + "18"}`,
        background: dark ? "rgba(42,82,82,0.4)" : C.warmWhite,
        transition: "border-color 0.3s",
      }}>
        <input
          type="email" value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email for early access"
          required
          style={{
            flex: 1, padding: "14px 16px",
            background: "transparent", border: "none", outline: "none",
            color: dark ? C.cream : C.text,
            fontSize: "15px", fontFamily: "'DM Sans', sans-serif",
          }}
        />
        <button type="submit" disabled={busy} style={{
          padding: "14px 26px",
          background: busy ? C.goldDark : C.gold,
          color: C.teal,
          border: "none",
          fontWeight: 700, fontSize: "14px",
          fontFamily: "'DM Sans', sans-serif",
          cursor: busy ? "wait" : "pointer",
          transition: "all 0.3s",
          whiteSpace: "nowrap",
          letterSpacing: "0.2px",
        }}>
          {busy ? "Joining..." : "Join the Waitlist →"}
        </button>
      </div>
      <p style={{ color: dark ? C.textLight : C.textMid, fontSize: "11px", textAlign: "center", opacity: 0.8 }}>
        Free early access · No spam · Unsubscribe anytime
      </p>
    </form>
  );
}

/* ─── PLATFORM PREVIEW ─── */
function Preview() {
  const rows = [
    { name: "Yasmin Mogahed", role: "Author & Speaker", score: 94 },
    { name: "Omar Suleiman", role: "Scholar & Educator", score: 97 },
    { name: "Mufti Menk", role: "Global Scholar", score: 96 },
    { name: "Nouman Ali Khan", role: "Linguist & Educator", score: 93 },
  ];

  return (
    <div style={{
      background: C.warmWhite,
      borderRadius: "18px",
      border: `1px solid ${C.border}`,
      overflow: "hidden",
      boxShadow: "0 32px 64px rgba(27,60,60,0.10), 0 4px 16px rgba(27,60,60,0.05)",
    }}>
      {/* Toolbar */}
      <div style={{
        padding: "13px 18px",
        borderBottom: `1px solid ${C.border}`,
        display: "flex", alignItems: "center", gap: "6px",
        background: C.cream,
      }}>
        <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#FF6259" }} />
        <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#FFC02F" }} />
        <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#29CE42" }} />
        <span style={{ marginLeft: "12px", color: C.textLight, fontSize: "11px", fontFamily: "'DM Mono', monospace" }}>
          lammaplus.app/discover
        </span>
      </div>

      <div style={{ padding: "18px" }}>
        {/* Tags */}
        <div style={{ display: "flex", gap: "5px", marginBottom: "14px", flexWrap: "wrap" }}>
          {[
            { n: "YouTube", c: "#CC0000" },
            { n: "TikTok", c: C.teal },
            { n: "Podcasts", c: C.burgundy },
            { n: "Books", c: C.terracotta },
            { n: "Wikipedia", c: C.dustyTeal },
          ].map((t) => (
            <span key={t.n} style={{
              padding: "3px 10px", borderRadius: "12px",
              background: `${t.c}10`, border: `1px solid ${t.c}22`,
              color: t.c, fontSize: "11px", fontWeight: 600,
            }}>{t.n}</span>
          ))}
        </div>

        {/* Rows */}
        {rows.map((r, i) => (
          <div key={i} style={{
            padding: "12px 14px",
            marginBottom: i < rows.length - 1 ? "4px" : 0,
            background: i === 0 ? C.goldGlow : "transparent",
            borderRadius: "10px",
            display: "flex", alignItems: "center", gap: "12px",
            border: i === 0 ? `1px solid ${C.gold}28` : "1px solid transparent",
            transition: "background 0.2s",
          }}>
            <div style={{
              width: 36, height: 36, borderRadius: "50%",
              background: [
                `linear-gradient(135deg, ${C.dustyTeal}40, ${C.terracotta}30)`,
                `linear-gradient(135deg, ${C.teal}40, ${C.gold}30)`,
                `linear-gradient(135deg, ${C.burgundy}30, ${C.sand}40)`,
                `linear-gradient(135deg, ${C.terracotta}35, ${C.teal}30)`,
              ][i],
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "14px", fontWeight: 700, color: C.teal,
              fontFamily: "'Playfair Display', Georgia, serif",
              flexShrink: 0,
            }}>{r.name[0]}</div>
            <div style={{ flex: 1 }}>
              <div style={{ color: C.text, fontWeight: 600, fontSize: "13px" }}>{r.name}</div>
              <div style={{ color: C.textLight, fontSize: "11px" }}>{r.role}</div>
            </div>
            <div style={{
              background: C.teal, color: C.gold,
              padding: "3px 8px", borderRadius: "6px",
              fontSize: "11px", fontWeight: 700, flexShrink: 0,
            }}>{r.score}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ════════════════════════════════════════
   MAIN PAGE 
   ════════════════════════════════════════ */
export default function LammaPlusLanding() {
  const [sy, setSy] = useState(0);
  useEffect(() => {
    const h = () => setSy(window.scrollY);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <div style={{
      minHeight: "100vh", background: C.warmWhite,
      color: C.text, fontFamily: "'DM Sans', sans-serif",
      overflowX: "hidden",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600;1,700&family=DM+Sans:wght@300;400;500;600;700&family=DM+Mono:wght@400&display=swap');
        * { margin:0; padding:0; box-sizing:border-box; }
        html { scroll-behavior: smooth; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
        @keyframes softFloat { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-7px); } }
        @keyframes pulse { 0%,100% { opacity:0.45; } 50% { opacity:1; } }
        @keyframes shimmer { 0% { opacity:0.3; } 50% { opacity:0.6; } 100% { opacity:0.3; } }
        ::selection { background: ${C.gold}40; color: ${C.teal}; }
        .sec { max-width: 1060px; margin: 0 auto; padding: 0 24px; }
        .nlink { color: ${C.textMid}; text-decoration: none; font-size: 14px; font-weight: 500; transition: color 0.3s; }
        .nlink:hover { color: ${C.teal}; }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; text-align: center; }
          .hero-stats { justify-content: center !important; }
          .features-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: 1fr !important; }
          .story-grid { grid-template-columns: 1fr !important; }
          .story-photo { max-width: 300px; margin: 0 auto; }
          .nav-links { display: none !important; }
          .footer-row { flex-direction: column; text-align: center; }
        }
      `}</style>

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "12px 28px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: sy > 40 ? `${C.warmWhite}F0` : "transparent",
        backdropFilter: sy > 40 ? "blur(14px)" : "none",
        borderBottom: sy > 40 ? `1px solid ${C.border}` : "1px solid transparent",
        transition: "all 0.4s",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
          {/* Inline SVG palm tree matching the logo style */}
          <svg width="30" height="36" viewBox="0 0 30 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Trunk */}
            <path d="M15 34V16" stroke={C.teal} strokeWidth="2.8" strokeLinecap="round"/>
            {/* Roots */}
            <path d="M15 34L11 36" stroke={C.teal} strokeWidth="2" strokeLinecap="round"/>
            <path d="M15 34L19 36" stroke={C.teal} strokeWidth="2" strokeLinecap="round"/>
            {/* Left fronds */}
            <path d="M15 16C12 12 7 8 3 6" stroke={C.teal} strokeWidth="2.2" strokeLinecap="round"/>
            <path d="M15 15C11 11 5 9 2 9" stroke={C.teal} strokeWidth="1.8" strokeLinecap="round" opacity="0.7"/>
            <path d="M15 17C10 14 4 13 1 14" stroke={C.teal} strokeWidth="1.6" strokeLinecap="round" opacity="0.5"/>
            {/* Right fronds */}
            <path d="M15 16C18 12 23 8 27 6" stroke={C.teal} strokeWidth="2.2" strokeLinecap="round"/>
            <path d="M15 15C19 11 25 9 28 9" stroke={C.teal} strokeWidth="1.8" strokeLinecap="round" opacity="0.7"/>
            <path d="M15 17C20 14 26 13 29 14" stroke={C.teal} strokeWidth="1.6" strokeLinecap="round" opacity="0.5"/>
            {/* Top frond */}
            <path d="M15 16C14 10 13 5 14 2" stroke={C.teal} strokeWidth="1.8" strokeLinecap="round" opacity="0.6"/>
            <path d="M15 16C16 10 17 5 16 2" stroke={C.teal} strokeWidth="1.8" strokeLinecap="round" opacity="0.6"/>
          </svg>
          <span style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "20px", fontWeight: 700, color: C.teal,
            letterSpacing: "1px",
          }}>
            LAMMA<span style={{ color: C.gold, fontWeight: 800 }}>+</span>
          </span>
        </div>
        <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: "26px" }}>
          <a href="#features" className="nlink">Features</a>
          <a href="#story" className="nlink">Our Story</a>
          <a href="#roadmap" className="nlink">Roadmap</a>
          <a href="#waitlist" style={{
            padding: "8px 18px", background: C.gold, color: C.teal,
            borderRadius: "8px", fontWeight: 700, fontSize: "13px",
            textDecoration: "none", transition: "all 0.3s",
            letterSpacing: "0.3px",
          }}>Get Early Access</a>
        </div>
      </nav>

      {/* ══════════════════════════════════
          HERO
          ══════════════════════════════════ */}
      <section style={{
        minHeight: "100vh", display: "flex", alignItems: "center",
        position: "relative", overflow: "hidden",
        background: `linear-gradient(168deg, ${C.warmWhite} 0%, ${C.cream} 60%, ${C.warmWhite} 100%)`,
      }}>
        {/* Subtle geometric accents */}
        <div style={{
          position: "absolute", top: "8%", right: "8%",
          width: 280, height: 280, borderRadius: "50%",
          background: `radial-gradient(circle, ${C.gold}0A, transparent 70%)`,
          pointerEvents: "none",
        }}/>
        <div style={{
          position: "absolute", bottom: "12%", left: "-3%",
          width: 180, height: 180, borderRadius: "50%",
          background: `radial-gradient(circle, ${C.dustyTeal}08, transparent 70%)`,
          pointerEvents: "none",
        }}/>
        {/* Four-pointed star accent (matches logo sheet) */}
        <div style={{
          position: "absolute", bottom: "18%", right: "12%",
          color: C.gold, fontSize: "20px", opacity: 0.25,
          animation: "shimmer 4s ease-in-out infinite",
          pointerEvents: "none",
        }}>✦</div>

        <div className="sec" style={{ width: "100%", paddingTop: "88px" }}>
          <div className="hero-grid" style={{
            display: "grid", gridTemplateColumns: "1.15fr 0.85fr",
            gap: "52px", alignItems: "center",
          }}>
            {/* Copy */}
            <div style={{ animation: "fadeUp 0.85s ease both" }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "7px",
                padding: "6px 14px", borderRadius: "20px",
                background: C.goldGlow, border: `1px solid ${C.gold}30`,
                marginBottom: "24px", fontSize: "12px", fontWeight: 600,
                color: C.goldDark, letterSpacing: "0.3px",
              }}>
                <span style={{ animation: "pulse 2.5s ease-in-out infinite", color: C.gold }}>●</span>
                Coming Soon — Join the Waitlist
              </div>

              <h1 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(36px, 4.6vw, 58px)",
                fontWeight: 800, lineHeight: 1.06, color: C.teal,
                marginBottom: "20px", letterSpacing: "-0.02em",
              }}>
                Discover the voices<br/>
                <span style={{ fontStyle: "italic", color: C.terracotta }}>shaping the ummah</span>
              </h1>

              <p style={{
                fontSize: "16px", lineHeight: 1.75, color: C.textMid,
                maxWidth: "440px", marginBottom: "30px",
              }}>
                The first platform to index Islamic scholars, educators, and creators across
                YouTube, TikTok, podcasts, books, and beyond — making the richness of Islamic
                knowledge accessible to everyone.
              </p>

              <Waitlist />

              <div className="hero-stats" style={{
                display: "flex", gap: "32px", marginTop: "40px",
                paddingTop: "24px", borderTop: `1px solid ${C.border}`,
              }}>
                {[
                  { n: 581, s: "+", l: "Creators Indexed", c: C.teal },
                  { n: 12, s: "+", l: "Platforms Tracked", c: C.terracotta },
                  { n: 40, s: "+", l: "Countries", c: C.burgundy },
                ].map((s, i) => (
                  <div key={i}>
                    <div style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: "28px", fontWeight: 700, color: s.c,
                    }}>
                      <Counter target={s.n} suffix={s.s} />
                    </div>
                    <div style={{ color: C.textLight, fontSize: "11px", marginTop: "2px", fontWeight: 500 }}>
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Preview */}
            <div style={{ animation: "fadeUp 0.85s ease 0.2s both" }}>
              <div style={{ animation: "softFloat 7s ease-in-out infinite" }}>
                <Preview />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          THE PROBLEM (teal section)
          ══════════════════════════════════ */}
      <section style={{
        padding: "100px 0", background: C.teal, color: C.cream,
        position: "relative", overflow: "hidden",
      }}>
        {/* Gold line accent */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "1px",
          background: `linear-gradient(90deg, transparent, ${C.gold}35, transparent)`,
        }}/>
        <div className="sec">
          <div style={{ textAlign: "center", maxWidth: "660px", margin: "0 auto 50px" }}>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontWeight: 700, marginBottom: "16px", lineHeight: 1.15,
            }}>
              Islamic knowledge is <span style={{ color: C.gold, fontStyle: "italic" }}>everywhere</span><br/>
              but impossible to navigate
            </h2>
            <p style={{ color: C.sand, fontSize: "15px", lineHeight: 1.75 }}>
              Thousands of scholars and educators create across a dozen platforms — but there's no single
              place to discover, explore, or follow them. The ummah's knowledge is scattered. We're bringing it together.
            </p>
          </div>

          <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
            {[
              { n: 2, s: "B+", l: "Muslims Worldwide" },
              { n: 1000, s: "s", l: "Of Creators Across Platforms" },
              { n: 0, s: "", l: "Unified Discovery Tools", label: "Zero" },
            ].map((s, i) => (
              <div key={i} style={{
                textAlign: "center", padding: "28px 18px",
                background: `${C.sand}0C`, borderRadius: "14px",
                border: `1px solid ${C.sand}14`,
              }}>
                <div style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "42px", fontWeight: 700, color: C.gold,
                  lineHeight: 1, marginBottom: "6px",
                }}>{s.label || <Counter target={s.n} suffix={s.s} />}</div>
                <div style={{ color: C.sand, fontSize: "13px", fontWeight: 500 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          FEATURES
          ══════════════════════════════════ */}
      <section id="features" style={{ padding: "100px 0" }}>
        <div className="sec">
          <div style={{ textAlign: "center", marginBottom: "52px" }}>
            <div style={{
              color: C.terracotta, fontSize: "11px", fontWeight: 700,
              textTransform: "uppercase", letterSpacing: "2.5px", marginBottom: "12px",
            }}>What We're Building</div>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(28px, 3.2vw, 40px)", fontWeight: 700, color: C.teal,
            }}>
              One platform. Every voice.{" "}
              <span style={{ fontStyle: "italic", color: C.terracotta }}>Every tradition.</span>
            </h2>
          </div>

          <div className="features-grid" style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px",
          }}>
            {[
              { icon: "🔍", title: "Intelligent Discovery", desc: "Search scholars by topic, language, region, tradition, or platform. Find voices from every corner of the ummah." },
              { icon: "📊", title: "Unified Profiles", desc: "One profile per creator — pulling from YouTube, TikTok, podcasts, books, and Wikipedia. Automatically enriched." },
              { icon: "🌍", title: "The Full Ummah", desc: "From West Africa to Southeast Asia, converts to lifelong scholars, emerging voices to established names. Everyone represented." },
              { icon: "🎯", title: "Quality Signals", desc: "AI-powered completeness scoring surfaces the most active and well-documented creators — hidden gems don't stay hidden." },
              { icon: "📱", title: "Every Platform", desc: "YouTube, TikTok, Instagram, Spotify, Apple Podcasts, Google Books, academic publications — all connected in one place." },
              { icon: "🤲", title: "Community-Built", desc: "Nominate scholars. Claim your profile. Help build the most comprehensive index of Islamic knowledge creators ever assembled." },
            ].map((f, i) => (
              <div key={i} style={{
                padding: "28px", background: C.warmWhite,
                borderRadius: "14px", border: `1px solid ${C.border}`,
                transition: "all 0.3s", cursor: "default",
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 10px 28px rgba(27,60,60,0.07)";
                  e.currentTarget.style.borderColor = C.gold + "50";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = C.border;
                }}
              >
                <div style={{ fontSize: "28px", marginBottom: "12px" }}>{f.icon}</div>
                <h3 style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "18px", color: C.teal, marginBottom: "7px",
                }}>{f.title}</h3>
                <p style={{ color: C.textMid, fontSize: "13px", lineHeight: 1.65 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          REPRESENTATION BANNER
          ══════════════════════════════════ */}
      <section style={{
        padding: "72px 0",
        background: `linear-gradient(135deg, ${C.cream}, ${C.creamMid})`,
      }}>
        <div className="sec" style={{ textAlign: "center", maxWidth: "680px" }}>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700,
            color: C.teal, lineHeight: 1.25, marginBottom: "16px",
          }}>
            The ummah is <span style={{ color: C.burgundy, fontStyle: "italic" }}>beautifully vast</span>.<br/>
            Our platform reflects that.
          </h2>
          <p style={{ color: C.textMid, fontSize: "15px", lineHeight: 1.75, marginBottom: "28px" }}>
            From West African Sufi traditions to Southeast Asian scholarship, from pioneering women
            educators to emerging young creators, from converts sharing their journey to lifelong scholars —
            Lamma+ is built to represent the full spectrum of Islamic thought and experience.
          </p>
          <div style={{ display: "flex", gap: "8px", justifyContent: "center", flexWrap: "wrap" }}>
            {["Scholars", "Educators", "Authors", "Speakers", "Podcasters", "Content Creators", "Activists", "Artists", "Converts", "Youth Voices"].map((t) => (
              <span key={t} style={{
                padding: "5px 14px", borderRadius: "18px",
                background: C.warmWhite, border: `1px solid ${C.teal}14`,
                color: C.teal, fontSize: "12px", fontWeight: 500,
              }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          FOUNDER STORY
          ══════════════════════════════════ */}
      <section id="story" style={{ padding: "100px 0" }}>
        <div className="sec">
          <div className="story-grid" style={{
            display: "grid", gridTemplateColumns: "0.8fr 1.2fr",
            gap: "64px", alignItems: "center",
          }}>
            <div className="story-photo">
              <div style={{
                width: "100%", aspectRatio: "4/5", borderRadius: "18px",
                background: `linear-gradient(150deg, ${C.teal}, ${C.tealMid})`,
                display: "flex", alignItems: "center", justifyContent: "center",
                flexDirection: "column", gap: "12px",
                position: "relative", overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute", inset: 0, opacity: 0.05,
                  backgroundImage: `repeating-linear-gradient(45deg, ${C.gold} 0, ${C.gold} 1px, transparent 1px, transparent 18px)`,
                }}/>
                {/* Star accent matching logo sheet */}
                <div style={{
                  position: "absolute", top: 16, right: 16,
                  color: C.gold, fontSize: "14px", opacity: 0.4,
                }}>✦</div>
                <div style={{
                  width: 90, height: 90, borderRadius: "50%",
                  background: `linear-gradient(135deg, ${C.gold}45, ${C.terracotta}35)`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "38px", zIndex: 1, color: C.cream,
                }}>✦</div>
                <div style={{ textAlign: "center", zIndex: 1 }}>
                  <div style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "20px", fontWeight: 700, color: C.cream,
                  }}>Hassan</div>
                  <div style={{ color: C.sand, fontSize: "12px", marginTop: "3px" }}>Founder & Creator</div>
                </div>
              </div>
            </div>

            <div>
              <div style={{
                color: C.terracotta, fontSize: "11px", fontWeight: 700,
                textTransform: "uppercase", letterSpacing: "2.5px", marginBottom: "12px",
              }}>The Story Behind Lamma+</div>
              <h2 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(24px, 3vw, 36px)",
                fontWeight: 700, lineHeight: 1.2, color: C.teal, marginBottom: "22px",
              }}>
                Built at the intersection of<br/>
                <span style={{ color: C.terracotta, fontStyle: "italic" }}>faith, technology & community</span>
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  "As a software engineer, artist, and community organizer in Minneapolis, I've always lived where creativity meets technology. Through my work as a Cedar Commission Fellow and Minnesota State Arts Board grant recipient, I've witnessed how powerful it is when communities can discover and amplify their own voices.",
                  "When I looked for a way to find the scholars, educators, and creators shaping how millions understand Islam — I found nothing. No directory. No index. No unified platform to discover the incredible breadth of thought shared daily across YouTube, TikTok, podcasts, and books.",
                  "So I built one. Lamma+ is the realization of a simple belief: that the voices shaping Islamic knowledge deserve to be discovered, organized, and celebrated — and that the ummah deserves a platform that makes that effortless.",
                ].map((p, i) => (
                  <p key={i} style={{ color: C.textMid, fontSize: "14px", lineHeight: 1.8 }}>{p}</p>
                ))}
              </div>

              <div style={{ display: "flex", gap: "8px", marginTop: "24px", flexWrap: "wrap" }}>
                {["Software Engineer", "Cedar Commission Fellow", "MSAB Grant Recipient", "Tech-sess Founder"].map((t) => (
                  <span key={t} style={{
                    padding: "4px 12px", borderRadius: "16px",
                    border: `1px solid ${C.terracotta}30`,
                    color: C.terracotta, fontSize: "11px", fontWeight: 600,
                  }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          ROADMAP
          ══════════════════════════════════ */}
      <section id="roadmap" style={{ padding: "100px 0", background: C.cream }}>
        <div className="sec">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div style={{
              color: C.terracotta, fontSize: "11px", fontWeight: 700,
              textTransform: "uppercase", letterSpacing: "2.5px", marginBottom: "12px",
            }}>Roadmap</div>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(28px, 3.2vw, 40px)", fontWeight: 700, color: C.teal,
            }}>Where we're headed</h2>
          </div>

          <div style={{ maxWidth: "560px", margin: "0 auto" }}>
            {[
              { ph: "Now", t: "581+ creators indexed", d: "Profiles enriched with AI from 12+ platforms across 40+ countries", done: true },
              { ph: "Next", t: "3,000 creator milestone", d: "Expanding globally — scholars, emerging voices, every tradition", done: false },
              { ph: "Soon", t: "Public beta launch", d: "Open platform with search, filtering, and community features", done: false },
              { ph: "Future", t: "Creator profiles & community", d: "Creators claim profiles. Community nominations and curation.", done: false },
            ].map((r, i) => (
              <div key={i} style={{
                display: "flex", gap: "20px", padding: "24px 0",
                borderBottom: i < 3 ? `1px solid ${C.teal}0E` : "none",
              }}>
                <div style={{
                  width: 40, height: 40, borderRadius: "50%",
                  background: r.done ? C.teal : C.warmWhite,
                  border: `2px solid ${r.done ? C.teal : C.teal + "30"}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: r.done ? C.gold : C.teal,
                  fontWeight: 700, fontSize: "15px", flexShrink: 0,
                }}>{r.done ? "✓" : i + 1}</div>
                <div>
                  <div style={{
                    color: C.terracotta, fontSize: "10px", fontWeight: 700,
                    textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "3px",
                  }}>{r.ph}</div>
                  <h3 style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "17px", color: C.teal, marginBottom: "3px",
                  }}>{r.t}</h3>
                  <p style={{ color: C.textLight, fontSize: "13px" }}>{r.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          FINAL CTA
          ══════════════════════════════════ */}
      <section id="waitlist" style={{
        padding: "100px 0", background: C.teal,
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: 380, height: 380, borderRadius: "50%",
          background: `radial-gradient(circle, ${C.gold}08, transparent 70%)`,
          pointerEvents: "none",
        }}/>
        {/* Star accents */}
        <div style={{ position: "absolute", top: "15%", left: "10%", color: C.gold, fontSize: "16px", opacity: 0.15 }}>✦</div>
        <div style={{ position: "absolute", bottom: "20%", right: "8%", color: C.gold, fontSize: "12px", opacity: 0.2 }}>✦</div>

        <div className="sec" style={{ textAlign: "center", position: "relative" }}>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(32px, 4.2vw, 50px)",
            fontWeight: 800, lineHeight: 1.1, color: C.cream, marginBottom: "16px",
          }}>
            Be part of something<br/>
            <span style={{ color: C.gold, fontStyle: "italic" }}>the ummah has been waiting for</span>
          </h2>
          <p style={{
            color: C.sand, fontSize: "16px", lineHeight: 1.7,
            maxWidth: "460px", margin: "0 auto 32px",
          }}>
            Join the waitlist for early access and help shape the future of Islamic knowledge discovery.
          </p>
          <div style={{ maxWidth: "440px", margin: "0 auto" }}>
            <Waitlist dark />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          FOOTER
          ══════════════════════════════════ */}
      <footer style={{ padding: "36px 0", background: C.teal, borderTop: `1px solid ${C.sand}12` }}>
        <div className="sec footer-row" style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "center", flexWrap: "wrap", gap: "14px",
        }}>
          <div>
            <span style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "16px", fontWeight: 700, color: C.cream,
              letterSpacing: "0.5px",
            }}>
              LAMMA<span style={{ color: C.gold }}>+</span>
            </span>
            <p style={{ color: C.sand, fontSize: "11px", marginTop: "3px", opacity: 0.7 }}>
              © 2026 Lamma+. Islamic knowledge, organized.
            </p>
          </div>
          <div style={{ display: "flex", gap: "18px" }}>
            {["Instagram", "TikTok", "X", "LinkedIn", "Facebook"].map((n) => (
              <a key={n} href="#" style={{
                color: C.sand, fontSize: "11px", textDecoration: "none",
                fontWeight: 500, transition: "color 0.3s", opacity: 0.8,
              }}
                onMouseEnter={(e) => { e.target.style.color = C.gold; e.target.style.opacity = "1"; }}
                onMouseLeave={(e) => { e.target.style.color = C.sand; e.target.style.opacity = "0.8"; }}
              >{n}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
