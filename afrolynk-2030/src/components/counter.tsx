"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";

/**
 * Animates the numeric portion of a metric value (e.g. "€12M", "45%", "<30%")
 * while preserving any prefix/suffix characters. Non-numeric values render as-is.
 */
export function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();

  // Parse once per `value`; keeps effect deps to stable primitives so the
  // running animation is never restarted by its own setDisplay re-renders.
  const parsed = useMemo(() => {
    const m = value.match(/([^\d]*)([\d.]+)(.*)/);
    if (!m) {
      return { numeric: false, prefix: "", target: 0, suffix: "", decimals: 0 };
    }
    return {
      numeric: true,
      prefix: m[1],
      target: parseFloat(m[2]),
      suffix: m[3],
      decimals: m[2].includes(".") ? 1 : 0,
    };
  }, [value]);

  const { numeric, prefix, target, suffix, decimals } = parsed;
  const [display, setDisplay] = useState(numeric ? "0" : value);

  useEffect(() => {
    if (!numeric || reduce) {
      setDisplay(numeric ? target.toFixed(decimals) : value);
      return;
    }
    if (!inView) return;
    const controls = animate(0, target, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v.toFixed(decimals)),
    });
    return () => controls.stop();
  }, [inView, numeric, target, decimals, reduce, value]);

  if (!numeric) return <span ref={ref}>{value}</span>;

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
