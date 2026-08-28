export interface CurrencyInfo {
  symbol: string;
  code: string;
  name: string;
  rateToEUR: number;
}

export const CURRENCIES: Record<string, CurrencyInfo> = {
  EUR: { symbol: '€', code: 'EUR', name: 'Euro', rateToEUR: 1 },
  USD: { symbol: '$', code: 'USD', name: 'US Dollar', rateToEUR: 1.08 },
  IDR: { symbol: 'Rp', code: 'IDR', name: 'Indonesian Rupiah', rateToEUR: 20661 },
  GBP: { symbol: '£', code: 'GBP', name: 'British Pound', rateToEUR: 0.85 },
  JPY: { symbol: '¥', code: 'JPY', name: 'Japanese Yen', rateToEUR: 161.4 },
  SGD: { symbol: 'S$', code: 'SGD', name: 'Singapore Dollar', rateToEUR: 1.45 },
  AUD: { symbol: 'A$', code: 'AUD', name: 'Australian Dollar', rateToEUR: 1.62 },
  INR: { symbol: '₹', code: 'INR', name: 'Indian Rupee', rateToEUR: 90.5 },
};

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
