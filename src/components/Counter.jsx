import { useState, useEffect, useRef } from "react";

/**
 * Animated counter that counts up when scrolled into view.
 * Uses IntersectionObserver + requestAnimationFrame with
 * an ease-out cubic curve.
 */
export default function Counter({ target, suffix = "", dur = 2200 }) {
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

  return (
    <span ref={ref}>
      {v.toLocaleString()}
      {suffix}
    </span>
  );
}
