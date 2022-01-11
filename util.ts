import {CURRENCIES} from './constants/currencies';

export const formatCash = (cashValue: number, currency: string) => {
  switch (currency) {
    case CURRENCIES.USD.name:
      return trimCashUSD(cashValue);
    case CURRENCIES.INR.name:
      return trimCashINR(cashValue);
  }
};

const trimCashUSD = (amount: number): string => {
  const SI_SYMBOL = ['', 'K', 'M', 'G', 'T', 'P', 'E'];
  const sign = Math.sign(amount);

  var tier = Math.trunc(Math.log10(Math.abs(amount)) / 3) ?? 0;

  if (tier === 0) {
    return amount + '';
  }

  const suffix = SI_SYMBOL[tier];
  const scale = Math.pow(10, tier * 3);

  const scaled = amount / scale;

  return sign * +scaled.toFixed(3) + suffix;
};

const trimCashINR = (amount: number): string => {
  const SI_SYMBOL_INR = ['', 'K', 'L', 'C'];
  const sign = Math.sign(amount);

  var tier = Math.trunc((Math.log10(Math.abs(amount)) - 1) / 2);

  if (tier <= 0) {
    return amount + '';
  }

  const suffix = SI_SYMBOL_INR[tier];
  const scale = Math.pow(10, tier * 2 + 1);

  const scaled = amount / scale;

  return sign * +scaled.toFixed(3) + suffix;
};
