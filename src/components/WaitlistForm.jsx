import { useState } from "react";
import C from "../constants/colors";

/**
 * Waitlist email capture form.
 * Shows a success state with social links after submission.
 *
 * @param {boolean} dark – use dark-theme variant (for teal backgrounds)
 */
export default function WaitlistForm({ dark = false }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [busy, setBusy] = useState(false);

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setBusy(true);
    setError("");

    const WAITLIST_URL = import.meta.env.VITE_WAITLIST_URL;

    try {
      if (WAITLIST_URL && !WAITLIST_URL.includes("YOUR_DEPLOYMENT_ID")) {
        // POST to Google Apps Script
        await fetch(WAITLIST_URL, {
          method: "POST",
          mode: "no-cors", // Apps Script doesn't support CORS preflight
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, source: dark ? "footer_cta" : "hero" }),
        });
      } else {
        // Fallback: save to localStorage so emails aren't lost
        const saved = JSON.parse(localStorage.getItem("lamma_waitlist") || "[]");
        saved.push({ email, timestamp: new Date().toISOString(), source: dark ? "footer_cta" : "hero" });
        localStorage.setItem("lamma_waitlist", JSON.stringify(saved));
        console.log("📧 Waitlist signup saved locally (set VITE_WAITLIST_URL to enable Google Sheets):", email);
      }
      setDone(true);
    } catch (err) {
      console.error("Waitlist error:", err);
      // Still save locally as backup
      const saved = JSON.parse(localStorage.getItem("lamma_waitlist") || "[]");
      saved.push({ email, timestamp: new Date().toISOString(), source: dark ? "footer_cta" : "hero" });
      localStorage.setItem("lamma_waitlist", JSON.stringify(saved));
      setDone(true);
    } finally {
      setBusy(false);
    }
  };

  /* ─── Success state ─── */
  if (done) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "28px 24px",
          background: dark ? C.sandSoft : C.goldGlow,
          borderRadius: "14px",
          border: `1px solid ${dark ? C.sand + "30" : C.gold + "35"}`,
        }}
      >
        <div style={{ fontSize: "24px", marginBottom: "6px", color: C.gold }}>
          ✦
        </div>
        <h3
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "21px",
            color: dark ? C.cream : C.teal,
            marginBottom: "6px",
          }}
        >
          You're on the list
        </h3>
        <p
          style={{
            color: dark ? C.textOnDark : C.textMid,
            fontSize: "14px",
            lineHeight: 1.5,
          }}
        >
          We'll notify you when Lamma+ opens to the public.
        </p>
        <div
          style={{
            display: "flex",
            gap: "8px",
            justifyContent: "center",
            marginTop: "16px",
            flexWrap: "wrap",
          }}
        >
          {["Instagram", "TikTok", "X", "LinkedIn", "Facebook"].map((p) => (
            <a
              key={p}
              href="#"
              style={{
                color: C.gold,
                fontSize: "11px",
                fontWeight: 600,
                textDecoration: "none",
                padding: "4px 12px",
                border: `1px solid ${C.gold}40`,
                borderRadius: "16px",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = C.gold;
                e.target.style.color = C.teal;
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "transparent";
                e.target.style.color = C.gold;
              }}
            >
              {p}
            </a>
          ))}
        </div>
      </div>
    );
  }

  /* ─── Form state ─── */
  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "8px" }}
    >
      <div
        style={{
          display: "flex",
          borderRadius: "10px",
          overflow: "hidden",
          border: `2px solid ${dark ? C.sand + "35" : C.teal + "18"}`,
          background: dark ? "rgba(42,82,82,0.4)" : C.warmWhite,
          transition: "border-color 0.3s",
        }}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email for early access"
          required
          style={{
            flex: 1,
            padding: "14px 16px",
            background: "transparent",
            border: "none",
            outline: "none",
            color: dark ? C.cream : C.text,
            fontSize: "15px",
            fontFamily: "'DM Sans', sans-serif",
          }}
        />
        <button
          type="submit"
          disabled={busy}
          style={{
            padding: "14px 26px",
            background: busy ? C.goldDark : C.gold,
            color: C.teal,
            border: "none",
            fontWeight: 700,
            fontSize: "14px",
            fontFamily: "'DM Sans', sans-serif",
            cursor: busy ? "wait" : "pointer",
            transition: "all 0.3s",
            whiteSpace: "nowrap",
            letterSpacing: "0.2px",
          }}
        >
          {busy ? "Joining..." : "Join the Waitlist →"}
        </button>
      </div>
      <p
        style={{
          color: dark ? C.textLight : C.textMid,
          fontSize: "11px",
          textAlign: "center",
          opacity: 0.8,
        }}
      >
        Free early access · No spam · Unsubscribe anytime
      </p>
    </form>
  );
}
