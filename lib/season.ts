export type Season = "spring" | "summer" | "autumn" | "winter";

export function getCurrentSeason(date: Date = new Date()): Season {
  const m = date.getMonth();
  if (m >= 2 && m <= 4) return "spring";
  if (m >= 5 && m <= 7) return "summer";
  if (m >= 8 && m <= 10) return "autumn";
  return "winter";
}

export const seasonLabel: Record<Season, { pt: string; en: string; zh: string }> = {
  spring: { pt: "Primavera", en: "Spring", zh: "春季" },
  summer: { pt: "Verão", en: "Summer", zh: "夏季" },
  autumn: { pt: "Outono", en: "Autumn", zh: "秋季" },
  winter: { pt: "Inverno", en: "Winter", zh: "冬季" },
};
