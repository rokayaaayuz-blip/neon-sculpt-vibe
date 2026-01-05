import { cn } from "@/lib/utils";
import { useEffect, useMemo, useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
};

const DEFAULT_THRESHOLD = 80; // remove dark/near-black background for this logo (edge-only flood fill)

const cache = new Map<string, string>();

function isNearBlack(r: number, g: number, b: number, threshold: number) {
  return r <= threshold && g <= threshold && b <= threshold;
}

async function makeBackgroundTransparent(src: string, threshold: number): Promise<string> {
  const cached = cache.get(`${src}|${threshold}`);
  if (cached) return cached;

  const img = new Image();
  img.crossOrigin = "anonymous";
  img.decoding = "async";
  img.src = src;

  await new Promise<void>((resolve, reject) => {
    img.onload = () => resolve();
    img.onerror = () => reject(new Error("Failed to load logo image"));
  });

  const w = img.naturalWidth || img.width;
  const h = img.naturalHeight || img.height;

  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");
  if (!ctx) return src;

  ctx.drawImage(img, 0, 0);

  const imageData = ctx.getImageData(0, 0, w, h);
  const data = imageData.data;
  const visited = new Uint8Array(w * h);

  const queue: number[] = [];
  const pushIfBg = (x: number, y: number) => {
    const idx = y * w + x;
    if (visited[idx]) return;
    const i = idx * 4;
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const a = data[i + 3];
    if (a === 0) return;
    if (!isNearBlack(r, g, b, threshold)) return;
    visited[idx] = 1;
    queue.push(idx);
  };

  // Seed flood fill from edges (only remove background connected to borders)
  for (let x = 0; x < w; x++) {
    pushIfBg(x, 0);
    pushIfBg(x, h - 1);
  }
  for (let y = 0; y < h; y++) {
    pushIfBg(0, y);
    pushIfBg(w - 1, y);
  }

  // Flood fill (4-neighborhood)
  while (queue.length) {
    const idx = queue.pop()!;
    const x = idx % w;
    const y = Math.floor(idx / w);

    if (x > 0) pushIfBg(x - 1, y);
    if (x < w - 1) pushIfBg(x + 1, y);
    if (y > 0) pushIfBg(x, y - 1);
    if (y < h - 1) pushIfBg(x, y + 1);
  }

  // Apply transparency to visited background pixels
  for (let p = 0; p < visited.length; p++) {
    if (!visited[p]) continue;
    data[p * 4 + 3] = 0;
  }

  ctx.putImageData(imageData, 0, 0);
  const out = canvas.toDataURL("image/png");
  cache.set(`${src}|${threshold}`, out);
  return out;
}

export default function TransparentLogo({ src, alt, className }: Props) {
  const [processedSrc, setProcessedSrc] = useState<string>(src);
  const [ready, setReady] = useState(false);
  const threshold = useMemo(() => DEFAULT_THRESHOLD, []);

  useEffect(() => {
    let cancelled = false;
    setReady(false);

    (async () => {
      try {
        const out = await makeBackgroundTransparent(src, threshold);
        if (!cancelled) {
          setProcessedSrc(out);
          setReady(true);
        }
      } catch {
        if (!cancelled) {
          setProcessedSrc(src);
          setReady(true);
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [src, threshold]);

  return (
    <img
      src={processedSrc}
      alt={alt}
      className={cn(className)}
      style={{ visibility: ready ? "visible" : "hidden" }}
    />
  );
}
