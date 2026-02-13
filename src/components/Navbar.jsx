import { useState, useEffect } from "react";
import C from "../constants/colors";

export default function Navbar() {
  const [sy, setSy] = useState(0);

  useEffect(() => {
    const h = () => setSy(window.scrollY);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "12px 28px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: sy > 40 ? `${C.warmWhite}F0` : "transparent",
        backdropFilter: sy > 40 ? "blur(14px)" : "none",
        borderBottom:
          sy > 40 ? `1px solid ${C.border}` : "1px solid transparent",
        transition: "all 0.4s",
      }}
    >
      {/* Logo — official brand PNG */}
      <a 
        href="/" 
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        style={{ display: "flex", alignItems: "center" }}
      >
        <img
          src="/lamma-logo-nav.png"
          alt="LAMMA+"
          style={{ height: "36px", width: "auto" }}
        />
      </a>

      {/* Nav links */}
      <div
        className="nav-links"
        style={{ display: "flex", alignItems: "center", gap: "26px" }}
      >
        <a href="#features" className="nlink">
          Features
        </a>
        <a href="#story" className="nlink">
          Our Story
        </a>
        <a href="#roadmap" className="nlink">
          Roadmap
        </a>
        <a
          href="#waitlist"
          style={{
            padding: "8px 18px",
            background: C.gold,
            color: C.teal,
            borderRadius: "8px",
            fontWeight: 700,
            fontSize: "13px",
            textDecoration: "none",
            transition: "all 0.3s",
            letterSpacing: "0.3px",
          }}
        >
          Get Early Access
        </a>
      </div>
    </nav>
  );
}
