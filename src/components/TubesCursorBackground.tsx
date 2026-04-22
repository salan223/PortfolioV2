import React, { useEffect, useRef } from "react";

type TubesApp = {
  tubes?: {
    setColors?: (colors: string[]) => void;
    setLightsColors?: (colors: string[]) => void;
  };
  dispose?: () => void;
};

function randomColors(count: number) {
  return Array.from({ length: count }, () => {
    const hex = Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, "0");
    return `#${hex}`;
  });
}

export default function TubesCursorBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const appRef = useRef<TubesApp | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Make sure canvas actually fills the screen (CSS + pixel ratio)
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    let mounted = true;

    (async () => {
      try {
        const mod: any = await import(
          /* @vite-ignore */
          "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js"
        );

        const TubesCursor = mod?.default ?? mod;

        if (!mounted) return;

        console.log("[TUBES] module loaded ✅");

        const app = TubesCursor(canvas, {
          tubes: {
            colors: ["#f967fb", "#53bc28", "#6958d5"],
            lights: {
              intensity: 200,
              colors: ["#83f36e", "#fe8a2e", "#ff008a", "#60aed5"],
            },
          },
        }) as TubesApp;

        appRef.current = app;

        const onClick = () => {
          appRef.current?.tubes?.setColors?.(randomColors(3));
          appRef.current?.tubes?.setLightsColors?.(randomColors(4));
        };

        document.body.addEventListener("click", onClick);

        console.log("[TUBES] initialized ✅");

        // cleanup handlers
        return () => {
          document.body.removeEventListener("click", onClick);
        };
      } catch (err) {
        console.error("[TUBES] failed to load/init ❌", err);
      }
    })();

    return () => {
      mounted = false;
      window.removeEventListener("resize", resize);
      appRef.current?.dispose?.();
      appRef.current = null;
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0"
      // TEMP: uncomment this for 10 seconds to confirm the canvas is visible at all
      // style={{ background: "black" }}
    />
  );
}
