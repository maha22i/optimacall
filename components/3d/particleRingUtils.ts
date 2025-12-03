const MIN_RADIUS = 5;
const MAX_RADIUS = 18;
const DEPTH = 3;

// Points pour le cercle intérieur
const NUM_INNER_POINTS = 150;
// Points pour le cercle extérieur
const NUM_OUTER_POINTS = 150;

interface Point {
  idx: number;
  position: [number, number, number];
  color: string;
}

const getGradientStop = (ratio: number): string => {
  // Couleurs adaptées au thème bleu/cyan de la section
  ratio = Math.min(1, Math.max(0, ratio));
  
  // Dégradé du cyan vers le bleu
  const c1 = { r: 34, g: 211, b: 238 };  // cyan-400
  const c2 = { r: 59, g: 130, b: 246 };  // blue-500
  const c3 = { r: 147, g: 197, b: 253 }; // blue-300
  
  let c: { r: number; g: number; b: number };
  
  if (ratio < 0.5) {
    const r = ratio * 2;
    c = {
      r: Math.round(c1.r * (1 - r) + c2.r * r),
      g: Math.round(c1.g * (1 - r) + c2.g * r),
      b: Math.round(c1.b * (1 - r) + c2.b * r),
    };
  } else {
    const r = (ratio - 0.5) * 2;
    c = {
      r: Math.round(c2.r * (1 - r) + c3.r * r),
      g: Math.round(c2.g * (1 - r) + c3.g * r),
      b: Math.round(c2.b * (1 - r) + c3.b * r),
    };
  }
  
  return `rgb(${c.r}, ${c.g}, ${c.b})`;
};

const randomFromInterval = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
};

export const pointsInner: Point[] = Array.from(
  { length: NUM_INNER_POINTS },
  (_, k) => k + 1
).map((num) => {
  const randomRadius = randomFromInterval(MIN_RADIUS, MAX_RADIUS / 2);
  const randomAngle = Math.random() * Math.PI * 2;

  const x = Math.cos(randomAngle) * randomRadius;
  const y = Math.sin(randomAngle) * randomRadius;
  const z = randomFromInterval(-DEPTH, DEPTH);

  const color = getGradientStop(z / DEPTH);

  return {
    idx: num,
    position: [x, y, z],
    color,
  };
});

export const pointsOuter: Point[] = Array.from(
  { length: NUM_OUTER_POINTS },
  (_, k) => k + 1
).map((num) => {
  const randomRadius = randomFromInterval(MAX_RADIUS / 2, MAX_RADIUS);
  const randomAngle = Math.random() * Math.PI * 2;

  const x = Math.cos(randomAngle) * randomRadius;
  const y = Math.sin(randomAngle) * randomRadius;
  const z = randomFromInterval(-DEPTH * 1.5, DEPTH * 1.5);

  const color = getGradientStop(z / (DEPTH * 1.5));

  return {
    idx: num + NUM_INNER_POINTS,
    position: [x, y, z],
    color,
  };
});

