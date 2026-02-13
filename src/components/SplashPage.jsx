import { useEffect, useState } from "react";
import C from "../constants/colors";

export default function SplashPage({ onComplete }) {
  const [exiting, setExiting] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setExiting(true);
          setTimeout(onComplete, 800); // Wait for exit animation to finish
          return 100;
        }
        // Random increment for realistic feel
        return Math.min(prev + Math.random() * 8 + 2, 100); 
      });
    }, 150);

    return () => clearInterval(interval);
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
          flexDirection: "column",
          alignItems: "center",
          gap: "32px",
          transform: exiting ? "translateY(-20px)" : "translateY(0)",
          transition: "transform 0.8s ease-in-out",
        }}
      >
        <img
          src="/lamma-logo-nav.png"
          alt="Lamma+"
          style={{
            height: "80px", // Larger for splash
            width: "auto",
            animation: "pulse 3s ease-in-out infinite",
          }}
        />

        {/* Loading Bar Container */}
        <div
          style={{
            width: "180px",
            height: "3px",
            background: `${C.teal}10`, // lighter track
            borderRadius: "4px",
            overflow: "hidden",
            marginTop: "8px",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${progress}%`,
              background: `linear-gradient(90deg, ${C.gold}, ${C.goldBright})`,
              borderRadius: "4px",
              transition: "width 0.2s ease-out",
            }}
          />
        </div>
        
        {/* Loading Text */}
        <div 
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "11px",
            color: C.teal,
            opacity: 0.5,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
         Loading Experience
        </div>
      </div>

      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          @keyframes pulse {
            0%, 100% { transform: scale(1); filter: brightness(100%); }
            50% { transform: scale(1.03); filter: brightness(110%); }
          }
        `}
      </style>
    </div>
  );
}
