export const DEFAULT_CATEGORY_COLORS: Record<string, string> = {
  Rent: '#181d27',
  Transport: '#d6a75c',
  Leisure: '#5b7cb8',
  Utilities: '#4a7885',
  Salary: '#143d24',
  Freelance: '#0f766e',
  Shopping: '#c26d40',
  Health: '#bd6c45',
  Cafés: '#cf9e48',
  Groceries: '#1e2430',
  food: '#36b37e',
  Travel: '#36b37e',
  Gear: '#c26d40',
  'Safety net': '#225a39',
  Education: '#8b5cf6',
  Car: '#ec4899',
  Wedding: '#f43f5e',
  Retirement: '#10b981',
};

const STORAGE_KEY = 'vinora_category_custom_colors_v3';

export const getCategoryCustomColors = (): Record<string, string> => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return { ...DEFAULT_CATEGORY_COLORS, ...JSON.parse(saved) };
    }
  } catch (e) {}
  return { ...DEFAULT_CATEGORY_COLORS };
};

export const getCategoryColor = (categoryName: string): string => {
  const colors = getCategoryCustomColors();
  if (colors[categoryName]) return colors[categoryName];

  // Hash fallback for new custom category
  let hash = 0;
  for (let i = 0; i < categoryName.length; i++) {
    hash = categoryName.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = Math.abs(hash) % 360;
  return `hsl(${hue}, 60%, 45%)`;
};

export const saveCategoryColor = (categoryName: string, newColor: string): Record<string, string> => {
  const colors = getCategoryCustomColors();
  colors[categoryName] = newColor;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(colors));
    window.dispatchEvent(new CustomEvent('vinora_category_colors_changed', { detail: { categoryName, newColor } }));
  } catch (e) {}
  return colors;
};
