export const formatCurrency = (currency, value) => {
  const valueFormated = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: currency,
    currencyDisplay: "narrowSymbol",
  }).format(value);

  return valueFormated;
};
