const calcConvertCurrency = (value, currencyValue) => {
  const conversion = Number(value) * Number(currencyValue);

  return conversion;
};

export default calcConvertCurrency;
