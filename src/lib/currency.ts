export interface CurrencyInfo {
  symbol: string;
  code: string;
  name: string;
  rateToEUR: number;
}

export const BASE_CURRENCIES: Record<string, CurrencyInfo> = {
  EUR: { symbol: '€', code: 'EUR', name: 'Euro', rateToEUR: 1 },
  USD: { symbol: '$', code: 'USD', name: 'US Dollar', rateToEUR: 1.08 },
  IDR: { symbol: 'Rp', code: 'IDR', name: 'Indonesian Rupiah', rateToEUR: 20661 },
  GBP: { symbol: '£', code: 'GBP', name: 'British Pound', rateToEUR: 0.85 },
  JPY: { symbol: '¥', code: 'JPY', name: 'Japanese Yen', rateToEUR: 161.4 },
  SGD: { symbol: 'S$', code: 'SGD', name: 'Singapore Dollar', rateToEUR: 1.45 },
  AUD: { symbol: 'A$', code: 'AUD', name: 'Australian Dollar', rateToEUR: 1.62 },
  INR: { symbol: '₹', code: 'INR', name: 'Indian Rupee', rateToEUR: 90.5 },
};

export const CURRENCIES: Record<string, CurrencyInfo> = { ...BASE_CURRENCIES };

const CACHE_KEY_RATES = 'vinora_currency_rates_cache';
const CACHE_KEY_TIME = 'vinora_currency_rates_timestamp';
const FETCH_INTERVAL_MS = 12 * 60 * 60 * 1000; // 12 hours

// Initialize and auto-fetch live rates
export const initLiveExchangeRates = async (): Promise<void> => {
  try {
    const cachedTimeStr = localStorage.getItem(CACHE_KEY_TIME);
    const cachedRatesStr = localStorage.getItem(CACHE_KEY_RATES);

    if (cachedTimeStr && cachedRatesStr) {
      const lastTime = parseInt(cachedTimeStr, 10);
      const rates = JSON.parse(cachedRatesStr);

      Object.keys(rates).forEach((code) => {
        if (CURRENCIES[code]) {
          CURRENCIES[code].rateToEUR = rates[code];
        }
      });

      if (Date.now() - lastTime < FETCH_INTERVAL_MS) {
        return;
      }
    }

    const response = await fetch('https://open.er-api.com/v6/latest/EUR');
    if (!response.ok) return;

    const data = await response.json();
    if (data && data.rates) {
      const newRates: Record<string, number> = {};
      Object.keys(CURRENCIES).forEach((code) => {
        if (data.rates[code]) {
          CURRENCIES[code].rateToEUR = data.rates[code];
          newRates[code] = data.rates[code];
        }
      });

      localStorage.setItem(CACHE_KEY_RATES, JSON.stringify(newRates));
      localStorage.setItem(CACHE_KEY_TIME, Date.now().toString());
    }
  } catch (err) {
    console.warn('Using baseline exchange rates due to offline state or fetch error.');
  }
};

// Helper for UI timestamp label
export const getRatesLastUpdatedText = (): string => {
  const cachedTimeStr = localStorage.getItem(CACHE_KEY_TIME);
  if (!cachedTimeStr) return 'auto-updates every 12 hours';

  const diffMs = Date.now() - parseInt(cachedTimeStr, 10);
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));

  if (diffHours < 1) return 'updated just now';
  if (diffHours === 1) return 'updated 1 hour ago';
  return `updated ${diffHours} hours ago`;
};

// Immediately initialize live exchange rates
initLiveExchangeRates();

export const formatMoney = (amountInEUR: number, currencyCode: string = 'EUR'): string => {
  const info = CURRENCIES[currencyCode] || CURRENCIES.EUR;
  const converted = amountInEUR * info.rateToEUR;
  const isNegative = converted < 0;
  const absVal = Math.abs(converted);

  const decimals = info.code === 'IDR' || info.code === 'JPY' ? 0 : 2;
  const formattedNum = absVal.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  const signStr = isNegative ? '-' : '';

  if (info.code === 'IDR') {
    return `${signStr}Rp${formattedNum}`;
  }
  return `${signStr}${info.symbol}${formattedNum}`;
};

export const getCurrencySymbol = (currencyCode: string = 'EUR'): string => {
  const info = CURRENCIES[currencyCode] || CURRENCIES.EUR;
  return info.symbol;
};

export interface QuickPreset {
  amount: number;
  label: string;
}

export const getCurrencyQuickPresets = (currencyCode: string = 'EUR'): QuickPreset[] => {
  const code = currencyCode.toUpperCase();
  const info = CURRENCIES[code] || CURRENCIES.EUR;
  const sym = info.symbol;

  switch (code) {
    case 'IDR':
      return [
        { amount: 50000, label: '+Rp50.000' },
        { amount: 100000, label: '+Rp100.000' },
        { amount: 250000, label: '+Rp250.000' },
        { amount: 500000, label: '+Rp500.000' },
      ];
    case 'JPY':
      return [
        { amount: 5000, label: '+¥5,000' },
        { amount: 10000, label: '+¥10,000' },
        { amount: 25000, label: '+¥25,000' },
        { amount: 50000, label: '+¥50,000' },
      ];
    case 'KRW':
      return [
        { amount: 50000, label: '+₩50,000' },
        { amount: 100000, label: '+₩100,000' },
        { amount: 250000, label: '+₩250,000' },
        { amount: 500000, label: '+₩500,000' },
      ];
    case 'VND':
      return [
        { amount: 500000, label: '+500.000 ₫' },
        { amount: 1000000, label: '+1.000.000 ₫' },
        { amount: 2500000, label: '+2.500.000 ₫' },
        { amount: 5000000, label: '+5.000.000 ₫' },
      ];
    case 'INR':
      return [
        { amount: 1000, label: '+₹1,000' },
        { amount: 2500, label: '+₹2,500' },
        { amount: 5000, label: '+₹5,000' },
        { amount: 10000, label: '+₹10,000' },
      ];
    default: {
      const rate = info.rateToEUR || 1;
      if (rate > 100) {
        const base = Math.round(rate * 10);
        return [
          { amount: base * 5, label: `+${sym}${(base * 5).toLocaleString()}` },
          { amount: base * 10, label: `+${sym}${(base * 10).toLocaleString()}` },
          { amount: base * 25, label: `+${sym}${(base * 25).toLocaleString()}` },
          { amount: base * 50, label: `+${sym}${(base * 50).toLocaleString()}` },
        ];
      }
      return [
        { amount: 50, label: `+${sym}50` },
        { amount: 100, label: `+${sym}100` },
        { amount: 250, label: `+${sym}250` },
        { amount: 500, label: `+${sym}500` },
      ];
    }
  }
};
