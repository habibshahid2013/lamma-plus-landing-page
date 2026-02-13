import { useEffect, useState } from "react";
import C from "../constants/colors";

export default function SplashPage({ onComplete }) {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Simpler timer-based loading
    const timer = setTimeout(() => {
      setExiting(true);
      setTimeout(onComplete, 800); // Wait for exit animation
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        background: `linear-gradient(168deg, ${C.warmWhite} 0%, ${C.cream} 60%, ${C.warmWhite} 100%)`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: exiting ? 0 : 1,
        pointerEvents: exiting ? "none" : "auto",
        transition: "opacity 0.8s ease-in-out",
      }}
    >
      {/* Decorative Background Elements */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          right: "10%",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${C.gold}08, transparent 70%)`,
          pointerEvents: "none",
          animation: "float 6s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "5%",
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${C.dustyTeal}06, transparent 70%)`,
          pointerEvents: "none",
          animation: "float 8s ease-in-out infinite reverse",
        }}
      />

      {/* Logo Container */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: exiting ? "scale(0.95)" : "scale(1)",
          transition: "transform 0.8s ease-in-out",
        }}
      >
        <img
          src="/lamma-logo-nav.png"
          alt="Lamma+"
          style={{
            height: "80px",
            width: "auto",
            animation: "breathe 3s ease-in-out infinite",
          }}
        />
      </div>

      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          @keyframes breathe {
            0%, 100% { transform: scale(1); opacity: 0.85; filter: drop-shadow(0 0 0 rgba(212, 168, 50, 0)); }
            50% { transform: scale(1.05); opacity: 1; filter: drop-shadow(0 0 15px rgba(212, 168, 50, 0.3)); }
          }
        `}
      </style>
    </div>
  );
}
