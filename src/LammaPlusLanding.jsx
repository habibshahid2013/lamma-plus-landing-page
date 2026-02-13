import { useState } from "react";
import C from "./constants/colors";
import Navbar from "./components/Navbar";
import WaitlistForm from "./components/WaitlistForm";
import Counter from "./components/Counter";
import PlatformPreview from "./components/PlatformPreview";
import AnimatedSection from "./components/AnimatedSection";
import SearchMockup from "./components/SearchMockup";
import ProfileMockup from "./components/ProfileMockup";
import SplashPage from "./components/SplashPage";

/* ════════════════════════════════════════
   MAIN LANDING PAGE
   Assembles all 9 sections from the brief.
   ════════════════════════════════════════ */
export default function LammaPlusLanding() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: C.warmWhite,
        color: C.text,
        fontFamily: "'DM Sans', sans-serif",
        overflowX: "hidden",
      }}
    >
      {showSplash && <SplashPage onComplete={() => setShowSplash(false)} />}

      {/* ── NAV ── */}
      <Navbar />

      {/* ══════════════════════════════════
          1 · HERO
          ══════════════════════════════════ */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          background: `linear-gradient(168deg, ${C.warmWhite} 0%, ${C.cream} 60%, ${C.warmWhite} 100%)`,
        }}
      >
        {/* Subtle geometric accents */}
        <div
          style={{
            position: "absolute",
            top: "8%",
            right: "8%",
            width: 280,
            height: 280,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${C.gold}0A, transparent 70%)`,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "12%",
            left: "-3%",
            width: 180,
            height: 180,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${C.dustyTeal}08, transparent 70%)`,
            pointerEvents: "none",
          }}
        />
        {/* Four-pointed star accent */}
        <div
          style={{
            position: "absolute",
            bottom: "18%",
            right: "12%",
            color: C.gold,
            fontSize: "20px",
            opacity: 0.25,
            animation: "shimmer 4s ease-in-out infinite",
            pointerEvents: "none",
          }}
        >
          ✦
        </div>

        <div className="sec" style={{ width: "100%", paddingTop: "88px" }}>
          <div
            className="hero-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1.15fr 0.85fr",
              gap: "52px",
              alignItems: "center",
            }}
          >
            {/* Copy */}
            <div style={{ animation: "fadeUp 0.85s ease both" }}>
              {/* Badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "7px",
                  padding: "6px 14px",
                  borderRadius: "20px",
                  background: C.goldGlow,
                  border: `1px solid ${C.gold}30`,
                  marginBottom: "24px",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: C.goldDark,
                  letterSpacing: "0.3px",
                }}
              >
                <span
                  style={{
                    animation: "pulse 2.5s ease-in-out infinite",
                    color: C.gold,
                  }}
                >
                  ●
                </span>
                Coming Soon — Join the Waitlist
              </div>

              {/* Headline */}
              <h1
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "clamp(36px, 4.6vw, 58px)",
                  fontWeight: 800,
                  lineHeight: 1.06,
                  color: C.teal,
                  marginBottom: "20px",
                  letterSpacing: "-0.02em",
                }}
              >
                Discover the voices
                <br />
                <span style={{ fontStyle: "italic", color: C.terracotta }}>
                  shaping the ummah
                </span>
              </h1>

              {/* Subheadline */}
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: 1.75,
                  color: C.textMid,
                  maxWidth: "440px",
                  marginBottom: "30px",
                }}
              >
                The first platform to index Islamic scholars, educators, and
                creators across YouTube, TikTok, podcasts, books, and beyond —
                making the richness of Islamic knowledge accessible to everyone.
              </p>

              <WaitlistForm />

              {/* Stats */}
              <div
                className="hero-stats"
                style={{
                  display: "flex",
                  gap: "32px",
                  marginTop: "40px",
                  paddingTop: "24px",
                  borderTop: `1px solid ${C.border}`,
                }}
              >
                {[
                  { n: 581, s: "+", l: "Creators Indexed", c: C.teal },
                  { n: 12, s: "+", l: "Platforms Tracked", c: C.terracotta },
                  { n: 40, s: "+", l: "Countries", c: C.burgundy },
                ].map((s, i) => (
                  <div key={i}>
                    <div
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontSize: "28px",
                        fontWeight: 700,
                        color: s.c,
                      }}
                    >
                      <Counter target={s.n} suffix={s.s} />
                    </div>
                    <div
                      style={{
                        color: C.textLight,
                        fontSize: "11px",
                        marginTop: "2px",
                        fontWeight: 500,
                      }}
                    >
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Preview */}
            <div style={{ animation: "fadeUp 0.85s ease 0.2s both" }}>
              <div style={{ animation: "softFloat 7s ease-in-out infinite" }}>
                <PlatformPreview />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          2 · THE PROBLEM (teal section)
          ══════════════════════════════════ */}
      <section
        style={{
          padding: "100px 0",
          background: C.teal,
          color: C.cream,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Gold line accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "1px",
            background: `linear-gradient(90deg, transparent, ${C.gold}35, transparent)`,
          }}
        />
        <div className="sec">
          <div
            style={{
              textAlign: "center",
              maxWidth: "660px",
              margin: "0 auto 50px",
            }}
          >
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(28px, 3.5vw, 44px)",
                fontWeight: 700,
                marginBottom: "16px",
                lineHeight: 1.15,
              }}
            >
              Islamic knowledge is{" "}
              <span style={{ color: C.gold, fontStyle: "italic" }}>
                everywhere
              </span>
              <br />
              but impossible to navigate
            </h2>
            <p style={{ color: C.sand, fontSize: "15px", lineHeight: 1.75 }}>
              Thousands of scholars and educators create across a dozen
              platforms — but there's no single place to discover, explore, or
              follow them. The ummah's knowledge is scattered. We're bringing it
              together.
            </p>
          </div>

          <div
            className="stats-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "16px",
            }}
          >
            {[
              { n: 2, s: "B+", l: "Muslims Worldwide" },
              { n: 1000, s: "s", l: "Of Creators Across Platforms" },
              { n: 0, s: "", l: "Unified Discovery Tools", label: "Zero" },
            ].map((s, i) => (
              <div
                key={i}
                style={{
                  textAlign: "center",
                  padding: "28px 18px",
                  background: `${C.sand}0C`,
                  borderRadius: "14px",
                  border: `1px solid ${C.sand}14`,
                }}
              >
                <div
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "42px",
                    fontWeight: 700,
                    color: C.gold,
                    lineHeight: 1,
                    marginBottom: "6px",
                  }}
                >
                  {s.label || <Counter target={s.n} suffix={s.s} />}
                </div>
                <div
                  style={{ color: C.sand, fontSize: "13px", fontWeight: 500 }}
                >
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          2.5 · HOW IT WORKS
          ══════════════════════════════════ */}
      <section style={{ padding: "80px 0 20px", background: C.warmWhite }}>
        <div className="sec">
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <div
                style={{
                  color: C.terracotta,
                  fontSize: "11px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "2.5px",
                  marginBottom: "12px",
                }}
              >
                How It Works
              </div>
              <h2
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "clamp(28px, 3.2vw, 40px)",
                  fontWeight: 700,
                  color: C.teal,
                }}
              >
                From question to{" "}
                <span style={{ fontStyle: "italic", color: C.terracotta }}>
                  connection
                </span>{" "}
                — in seconds
              </h2>
            </div>
          </AnimatedSection>

          <div
            className="how-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
            }}
          >
            {[
              {
                step: "01",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={C.gold} strokeWidth="2" strokeLinecap="round">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                ),
                title: "Search",
                desc: "Type a topic, name, or question. Our AI-powered hybrid search understands what you mean — not just what you typed.",
              },
              {
                step: "02",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={C.gold} strokeWidth="2" strokeLinecap="round">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                ),
                title: "Discover",
                desc: "Explore rich profiles with videos, podcasts, books, and courses — all unified from 14 platforms into one view.",
              },
              {
                step: "03",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={C.gold} strokeWidth="2" strokeLinecap="round">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                ),
                title: "Connect",
                desc: "Follow your favorite scholars, compare creators side-by-side, and build your personal learning collection.",
              },
            ].map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div
                  style={{
                    textAlign: "center",
                    padding: "32px 24px",
                    background: C.warmWhite,
                    borderRadius: "16px",
                    border: `1px solid ${C.border}`,
                    position: "relative",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow = "0 10px 28px rgba(27,60,60,0.07)";
                    e.currentTarget.style.borderColor = C.gold + "40";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.borderColor = C.border;
                  }}
                >
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      background: `${C.teal}0C`,
                      border: `1px solid ${C.teal}18`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 16px",
                    }}
                  >
                    {s.icon}
                  </div>
                  <div
                    style={{
                      color: C.gold,
                      fontSize: "10px",
                      fontWeight: 700,
                      letterSpacing: "2px",
                      marginBottom: "6px",
                    }}
                  >
                    STEP {s.step}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: "20px",
                      color: C.teal,
                      marginBottom: "8px",
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      color: C.textMid,
                      fontSize: "13px",
                      lineHeight: 1.7,
                    }}
                  >
                    {s.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          3 · FEATURE SHOWCASE: DISCOVERY
          ══════════════════════════════════ */}
      <section id="features" style={{ padding: "80px 0" }}>
        <div className="sec">
          <div
            className="showcase-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "56px",
              alignItems: "center",
            }}
          >
            {/* Copy */}
            <AnimatedSection>
              <div>
                <div
                  style={{
                    color: C.terracotta,
                    fontSize: "11px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "2.5px",
                    marginBottom: "12px",
                  }}
                >
                  Intelligent Discovery
                </div>
                <h2
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "clamp(26px, 3vw, 38px)",
                    fontWeight: 700,
                    lineHeight: 1.15,
                    color: C.teal,
                    marginBottom: "18px",
                  }}
                >
                  Find the right voice —{" "}
                  <span style={{ fontStyle: "italic", color: C.terracotta }}>
                    in seconds
                  </span>
                </h2>
                <p
                  style={{
                    color: C.textMid,
                    fontSize: "15px",
                    lineHeight: 1.75,
                    marginBottom: "24px",
                  }}
                >
                  Our hybrid search combines AI-powered semantic understanding
                  with traditional filters. Search by topic, language, region,
                  or tradition — and discover scholars who match exactly what
                  you're looking for.
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  {[
                    {
                      icon: "✦",
                      text: "Semantic AI finds creators by meaning, not just keywords",
                    },
                    {
                      icon: "✦",
                      text: "Filter by topic, language, region, tradition, platform & content type",
                    },
                    {
                      icon: "✦",
                      text: "Real-time suggestions and search history as you type",
                    },
                  ].map((b) => (
                    <div
                      key={b.text}
                      style={{
                        display: "flex",
                        gap: "10px",
                        alignItems: "flex-start",
                      }}
                    >
                      <span
                        style={{
                          color: C.gold,
                          fontSize: "12px",
                          marginTop: "2px",
                          flexShrink: 0,
                        }}
                      >
                        {b.icon}
                      </span>
                      <span
                        style={{
                          color: C.textMid,
                          fontSize: "14px",
                          lineHeight: 1.5,
                        }}
                      >
                        {b.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Visual */}
            <AnimatedSection delay={0.2}>
              <div style={{ animation: "softFloat 8s ease-in-out infinite" }}>
                <SearchMockup />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          3.5 · FEATURE SHOWCASE: PROFILES
          ══════════════════════════════════ */}
      <section
        style={{
          padding: "80px 0",
          background: `linear-gradient(168deg, ${C.cream} 0%, ${C.warmWhite} 100%)`,
        }}
      >
        <div className="sec">
          <div
            className="showcase-grid showcase-grid-reverse"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "56px",
              alignItems: "center",
            }}
          >
            {/* Visual (left on desktop) */}
            <AnimatedSection>
              <div style={{ animation: "softFloat 9s ease-in-out infinite 0.5s" }}>
                <ProfileMockup />
              </div>
            </AnimatedSection>

            {/* Copy (right on desktop) */}
            <AnimatedSection delay={0.2}>
              <div>
                <div
                  style={{
                    color: C.terracotta,
                    fontSize: "11px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "2.5px",
                    marginBottom: "12px",
                  }}
                >
                  Rich Creator Profiles
                </div>
                <h2
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "clamp(26px, 3vw, 38px)",
                    fontWeight: 700,
                    lineHeight: 1.15,
                    color: C.teal,
                    marginBottom: "18px",
                  }}
                >
                  Every creator,{" "}
                  <span style={{ fontStyle: "italic", color: C.terracotta }}>
                    fully connected
                  </span>
                </h2>
                <p
                  style={{
                    color: C.textMid,
                    fontSize: "15px",
                    lineHeight: 1.75,
                    marginBottom: "24px",
                  }}
                >
                  One profile per creator — automatically enriched with content
                  from across the internet. Videos, podcasts, books, courses,
                  and social media presence — unified with AI-generated summaries
                  and quality scores.
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  {[
                    {
                      icon: "✦",
                      text: "Content from 14 platforms, unified in one profile",
                    },
                    {
                      icon: "✦",
                      text: "AI-generated summaries and completeness scoring",
                    },
                    {
                      icon: "✦",
                      text: "Videos, podcasts, books, courses — all organized by type",
                    },
                    {
                      icon: "✦",
                      text: "Follow, share, and compare creators side-by-side",
                    },
                  ].map((b) => (
                    <div
                      key={b.text}
                      style={{
                        display: "flex",
                        gap: "10px",
                        alignItems: "flex-start",
                      }}
                    >
                      <span
                        style={{
                          color: C.gold,
                          fontSize: "12px",
                          marginTop: "2px",
                          flexShrink: 0,
                        }}
                      >
                        {b.icon}
                      </span>
                      <span
                        style={{
                          color: C.textMid,
                          fontSize: "14px",
                          lineHeight: 1.5,
                        }}
                      >
                        {b.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          3.75 · PLATFORM INTEGRATION STRIP
          ══════════════════════════════════ */}
      <section style={{ padding: "60px 0", background: C.warmWhite }}>
        <div className="sec">
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: "32px" }}>
              <h2
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "clamp(22px, 2.5vw, 32px)",
                  fontWeight: 700,
                  color: C.teal,
                  marginBottom: "8px",
                }}
              >
                14 platforms.{" "}
                <span style={{ fontStyle: "italic", color: C.terracotta }}>
                  One unified view.
                </span>
              </h2>
              <p
                style={{
                  color: C.textMid,
                  fontSize: "14px",
                  maxWidth: "480px",
                  margin: "0 auto",
                }}
              >
                Every creator's presence across the internet — connected and
                organized in a single profile.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div
              className="platform-strip"
              style={{
                display: "flex",
                gap: "8px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {[
                { name: "YouTube", color: "#CC0000" },
                { name: "TikTok", color: "#25F4EE" },
                { name: "Instagram", color: "#C13584" },
                { name: "Spotify", color: "#1DB954" },
                { name: "Apple Podcasts", color: "#9933CC" },
                { name: "Google Books", color: "#4285F4" },
                { name: "Facebook", color: "#1877F2" },
                { name: "X / Twitter", color: C.text },
                { name: "LinkedIn", color: "#0A66C2" },
                { name: "Threads", color: C.text },
                { name: "Twitch", color: "#9146FF" },
                { name: "Patreon", color: "#FF424D" },
                { name: "Apple Music", color: "#FC3C44" },
                { name: "Websites", color: C.teal },
              ].map((p) => (
                <span
                  key={p.name}
                  style={{
                    padding: "7px 16px",
                    borderRadius: "20px",
                    background: `${p.color}0C`,
                    border: `1px solid ${p.color}22`,
                    color: p.color,
                    fontSize: "12px",
                    fontWeight: 600,
                    transition: "all 0.3s",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `${p.color}18`;
                    e.currentTarget.style.borderColor = `${p.color}40`;
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = `${p.color}0C`;
                    e.currentTarget.style.borderColor = `${p.color}22`;
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {p.name}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ══════════════════════════════════
          3.9 · MORE FEATURES (condensed)
          ══════════════════════════════════ */}
      <section style={{ padding: "60px 0 80px" }}>
        <div className="sec">
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: "36px" }}>
              <h2
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "clamp(24px, 2.8vw, 34px)",
                  fontWeight: 700,
                  color: C.teal,
                }}
              >
                And so much more
              </h2>
            </div>
          </AnimatedSection>
          <div
            className="features-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "14px",
            }}
          >
            {[
              {
                icon: "🌍",
                title: "The Full Ummah",
                desc: "Every tradition, region, and generation — from West Africa to Southeast Asia, emerging voices to established names.",
              },
              {
                icon: "🎯",
                title: "Quality Signals",
                desc: "AI-powered completeness scoring surfaces the most active creators — hidden gems don't stay hidden.",
              },
              {
                icon: "🤲",
                title: "Community-Built",
                desc: "Nominate scholars. Claim your profile. Help build the most comprehensive index of Islamic knowledge creators.",
              },
              {
                icon: "⚖️",
                title: "Compare Creators",
                desc: "Side-by-side comparison of scholars — regions, languages, platforms, and content — to find your perfect match.",
              },
              {
                icon: "🌙",
                title: "Personalized Experience",
                desc: "Tailored onboarding by region and interests. Dark mode. Six languages including Arabic and Urdu with RTL support.",
              },
              {
                icon: "🕌",
                title: "New Muslim Guide",
                desc: "Curated onboarding for new Muslims — step-by-step guidance to find teachers for prayer, Quran, and community.",
              },
            ].map((f, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div
                  style={{
                    padding: "24px",
                    background: C.warmWhite,
                    borderRadius: "14px",
                    border: `1px solid ${C.border}`,
                    transition: "all 0.3s",
                    cursor: "default",
                    height: "100%",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 28px rgba(27,60,60,0.07)";
                    e.currentTarget.style.borderColor = C.gold + "50";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.borderColor = C.border;
                  }}
                >
                  <div style={{ fontSize: "24px", marginBottom: "10px" }}>
                    {f.icon}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: "17px",
                      color: C.teal,
                      marginBottom: "6px",
                    }}
                  >
                    {f.title}
                  </h3>
                  <p
                    style={{
                      color: C.textMid,
                      fontSize: "13px",
                      lineHeight: 1.65,
                    }}
                  >
                    {f.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          4 · REPRESENTATION BANNER
          ══════════════════════════════════ */}
      <section
        style={{
          padding: "72px 0",
          background: `linear-gradient(135deg, ${C.cream}, ${C.creamMid})`,
        }}
      >
        <div
          className="sec"
          style={{ textAlign: "center", maxWidth: "680px" }}
        >
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(24px, 3vw, 36px)",
              fontWeight: 700,
              color: C.teal,
              lineHeight: 1.25,
              marginBottom: "16px",
            }}
          >
            The ummah is{" "}
            <span style={{ color: C.burgundy, fontStyle: "italic" }}>
              beautifully vast
            </span>
            .<br />
            Our platform reflects that.
          </h2>
          <p
            style={{
              color: C.textMid,
              fontSize: "15px",
              lineHeight: 1.75,
              marginBottom: "28px",
            }}
          >
            From West African Sufi traditions to Southeast Asian scholarship,
            from pioneering women educators to emerging young creators, from
            converts sharing their journey to lifelong scholars — Lamma+ is
            built to represent the full spectrum of Islamic thought and
            experience.
          </p>
          <div
            style={{
              display: "flex",
              gap: "8px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {[
              "Scholars",
              "Educators",
              "Authors",
              "Speakers",
              "Podcasters",
              "Content Creators",
              "Activists",
              "Artists",
              "Converts",
              "Youth Voices",
            ].map((t) => (
              <span
                key={t}
                style={{
                  padding: "5px 14px",
                  borderRadius: "18px",
                  background: C.warmWhite,
                  border: `1px solid ${C.teal}14`,
                  color: C.teal,
                  fontSize: "12px",
                  fontWeight: 500,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          5 · FOUNDER STORY
          ══════════════════════════════════ */}
      <section id="story" style={{ padding: "100px 0" }}>
        <div className="sec">
          <div
            className="story-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "0.8fr 1.2fr",
              gap: "64px",
              alignItems: "center",
            }}
          >
            {/* Founder photo */}
            <div className="story-photo">
              <div
                style={{
                  width: "100%",
                  aspectRatio: "4/5",
                  borderRadius: "18px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <img
                  src="/founder-hassan.jpg"
                  alt="Hassan — Founder of Lamma+"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                    display: "block",
                  }}
                />
                {/* Gradient overlay at bottom for name */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "40px 24px 20px",
                    background: `linear-gradient(to top, ${C.teal}E8, ${C.teal}90, transparent)`,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: "20px",
                      fontWeight: 700,
                      color: C.cream,
                    }}
                  >
                    Hassan
                  </div>
                  <div
                    style={{
                      color: C.sand,
                      fontSize: "12px",
                      marginTop: "3px",
                    }}
                  >
                    Founder & CTO
                  </div>
                </div>
              </div>
            </div>

            {/* Story copy */}
            <div>
              <div
                style={{
                  color: C.terracotta,
                  fontSize: "11px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "2.5px",
                  marginBottom: "12px",
                }}
              >
                The Story Behind Lamma+
              </div>
              <h2
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "clamp(24px, 3vw, 36px)",
                  fontWeight: 700,
                  lineHeight: 1.2,
                  color: C.teal,
                  marginBottom: "22px",
                }}
              >
                Built at the intersection of
                <br />
                <span style={{ color: C.terracotta, fontStyle: "italic" }}>
                  faith, technology & community
                </span>
              </h2>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                {[
                  "As a software engineer, artist, and community organizer in Minneapolis, I've always lived where creativity meets technology. Through my work as a Cedar Commission Fellow and Minnesota State Arts Board grant recipient, I've witnessed how powerful it is when communities can discover and amplify their own voices.",
                  "When I looked for a way to find the scholars, educators, and creators shaping how millions understand Islam — I found nothing. No directory. No index. No unified platform to discover the incredible breadth of thought shared daily across YouTube, TikTok, podcasts, and books.",
                  "So I built one. Lamma+ is the realization of a simple belief: that the voices shaping Islamic knowledge deserve to be discovered, organized, and celebrated — and that the ummah deserves a platform that makes that effortless.",
                ].map((p, i) => (
                  <p
                    key={i}
                    style={{
                      color: C.textMid,
                      fontSize: "14px",
                      lineHeight: 1.8,
                    }}
                  >
                    {p}
                  </p>
                ))}
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "8px",
                  marginTop: "24px",
                  flexWrap: "wrap",
                }}
              >
                {[
                  "Software Engineer",
                  "Cedar Commission Fellow",
                  "MSAB Grant Recipient",
                  "Tech-sess Founder",
                ].map((t) => (
                  <span
                    key={t}
                    style={{
                      padding: "4px 12px",
                      borderRadius: "16px",
                      border: `1px solid ${C.terracotta}30`,
                      color: C.terracotta,
                      fontSize: "11px",
                      fontWeight: 600,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Founder social links */}
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  marginTop: "20px",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    color: C.textLight,
                    fontSize: "11px",
                    fontWeight: 500,
                    marginRight: "4px",
                  }}
                >
                  Follow the founder
                </span>
                {[
                  {
                    name: "LinkedIn",
                    href: "https://www.linkedin.com/in/hassan-s-49849368/",
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    ),
                  },
                  {
                    name: "Instagram",
                    href: "https://www.instagram.com/mindlessintentions/",
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    ),
                  },
                  {
                    name: "X",
                    href: "#",
                    icon: (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    ),
                  },
                ].map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow Hassan on ${s.name}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 34,
                      height: 34,
                      borderRadius: "50%",
                      border: `1px solid ${C.teal}20`,
                      color: C.teal,
                      background: C.warmWhite,
                      transition: "all 0.3s",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = C.teal;
                      e.currentTarget.style.color = C.cream;
                      e.currentTarget.style.borderColor = C.teal;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = C.warmWhite;
                      e.currentTarget.style.color = C.teal;
                      e.currentTarget.style.borderColor = C.teal + "20";
                    }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          6 · ROADMAP
          ══════════════════════════════════ */}
      <section id="roadmap" style={{ padding: "100px 0", background: C.cream }}>
        <div className="sec">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div
              style={{
                color: C.terracotta,
                fontSize: "11px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "2.5px",
                marginBottom: "12px",
              }}
            >
              Roadmap
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(28px, 3.2vw, 40px)",
                fontWeight: 700,
                color: C.teal,
              }}
            >
              Where we're headed
            </h2>
          </div>

          <div style={{ maxWidth: "560px", margin: "0 auto" }}>
            {[
              {
                ph: "Now",
                t: "581+ creators indexed",
                d: "Profiles enriched with AI from 12+ platforms across 40+ countries",
                done: true,
              },
              {
                ph: "Next",
                t: "3,000 creator milestone",
                d: "Expanding globally — scholars, emerging voices, every tradition",
                done: false,
              },
              {
                ph: "Soon",
                t: "Public beta launch",
                d: "Open platform with search, filtering, and community features",
                done: false,
              },
              {
                ph: "Future",
                t: "Creator profiles & community",
                d: "Creators claim profiles. Community nominations and curation.",
                done: false,
              },
            ].map((r, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "20px",
                  padding: "24px 0",
                  borderBottom:
                    i < 3 ? `1px solid ${C.teal}0E` : "none",
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: r.done ? C.teal : C.warmWhite,
                    border: `2px solid ${r.done ? C.teal : C.teal + "30"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: r.done ? C.gold : C.teal,
                    fontWeight: 700,
                    fontSize: "15px",
                    flexShrink: 0,
                  }}
                >
                  {r.done ? "✓" : i + 1}
                </div>
                <div>
                  <div
                    style={{
                      color: C.terracotta,
                      fontSize: "10px",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "1.5px",
                      marginBottom: "3px",
                    }}
                  >
                    {r.ph}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: "17px",
                      color: C.teal,
                      marginBottom: "3px",
                    }}
                  >
                    {r.t}
                  </h3>
                  <p style={{ color: C.textLight, fontSize: "13px" }}>
                    {r.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          7 · FINAL CTA
          ══════════════════════════════════ */}
      <section
        id="waitlist"
        style={{
          padding: "100px 0",
          background: C.teal,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Radial glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 380,
            height: 380,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${C.gold}08, transparent 70%)`,
            pointerEvents: "none",
          }}
        />
        {/* Star accents */}
        <div
          style={{
            position: "absolute",
            top: "15%",
            left: "10%",
            color: C.gold,
            fontSize: "16px",
            opacity: 0.15,
          }}
        >
          ✦
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "20%",
            right: "8%",
            color: C.gold,
            fontSize: "12px",
            opacity: 0.2,
          }}
        >
          ✦
        </div>

        <div
          className="sec"
          style={{ textAlign: "center", position: "relative" }}
        >
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(32px, 4.2vw, 50px)",
              fontWeight: 800,
              lineHeight: 1.1,
              color: C.cream,
              marginBottom: "16px",
            }}
          >
            Be part of something
            <br />
            <span style={{ color: C.gold, fontStyle: "italic" }}>
              the ummah has been waiting for
            </span>
          </h2>
          <p
            style={{
              color: C.sand,
              fontSize: "16px",
              lineHeight: 1.7,
              maxWidth: "460px",
              margin: "0 auto 32px",
            }}
          >
            Join the waitlist for early access and help shape the future of
            Islamic knowledge discovery.
          </p>
          <div style={{ maxWidth: "440px", margin: "0 auto" }}>
            <WaitlistForm dark />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          8 · FOOTER
          ══════════════════════════════════ */}
      <footer
        style={{
          padding: "36px 0",
          background: C.teal,
          borderTop: `1px solid ${C.sand}12`,
        }}
      >
        <div
          className="sec footer-row"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "14px",
          }}
        >
          <div>
            <img
              src="/lamma-logo-nav.png"
              alt="LAMMA+"
              style={{
                height: "28px",
                width: "auto",
                filter: "brightness(0) invert(1) brightness(0.88) sepia(0.15)",
              }}
            />
            <p
              style={{
                color: C.sand,
                fontSize: "11px",
                marginTop: "3px",
                opacity: 0.7,
              }}
            >
              © 2026 Lamma+. Islamic knowledge, organized.
            </p>
          </div>
          <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
            {[
              {
                name: "Instagram",
                href: "https://www.instagram.com/lammaplus",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                ),
              },
              {
                name: "TikTok",
                href: "https://www.tiktok.com/@lammaplus",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                ),
              },
              {
                name: "Threads",
                href: "https://www.threads.com/@lammaplus",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.59 12c.025 3.083.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.187.408-2.26 1.33-3.017.88-.724 2.104-1.128 3.443-1.136.932-.006 1.826.132 2.657.399-.09-.58-.27-1.075-.545-1.477-.498-.726-1.298-1.104-2.378-1.125-1.476-.03-2.492.456-3.021 1.444l-1.78-.93c.836-1.563 2.42-2.39 4.714-2.39h.087c1.568.027 2.8.595 3.66 1.688.728.925 1.148 2.168 1.25 3.691.48.232.924.5 1.325.808 1.217.936 2.088 2.204 2.518 3.667.538 1.827.38 4.465-1.932 6.725-1.905 1.862-4.177 2.674-7.376 2.696zm-.567-7.965c.04.744.367 1.29.974 1.626.578.32 1.313.44 2.073.4 1.065-.058 1.9-.434 2.482-1.12.482-.568.832-1.327 1.042-2.262-.82-.327-1.727-.5-2.695-.494-.954.006-1.768.257-2.291.708-.528.455-.633.977-.585 1.142z" />
                  </svg>
                ),
              },
              {
                name: "X",
                href: "https://x.com/lammaplus",
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                ),
              },
              {
                name: "LinkedIn",
                href: "https://www.linkedin.com/company/lammaplus/",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                ),
              },
              {
                name: "Facebook",
                href: "https://www.facebook.com/profile.php?id=61588046880895",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                ),
              },
            ].map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Lamma+ on ${s.name}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 34,
                  height: 34,
                  borderRadius: "50%",
                  border: `1px solid ${C.sand}25`,
                  color: C.sand,
                  textDecoration: "none",
                  transition: "all 0.3s",
                  opacity: 0.8,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = C.gold;
                  e.currentTarget.style.borderColor = C.gold + "50";
                  e.currentTarget.style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = C.sand;
                  e.currentTarget.style.borderColor = C.sand + "25";
                  e.currentTarget.style.opacity = "0.8";
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
