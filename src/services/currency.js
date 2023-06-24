export const getCurrencyValue = async (currency) => {
  const baseUrl = "https://economia.awesomeapi.com.br/last";
  let response = [];

  try {
    response = await fetch(`${baseUrl}/${currency}`, {
      method: "get",
    })
      .then((response) => response.json())
      .then((data) => data);

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getCurrencyMounth = async (currency) => {
  const baseUrl = "https://economia.awesomeapi.com.br/json/daily";
  const days = 90;
  let response = [];

  try {
    response = await fetch(`${baseUrl}/${currency}/${days}`, {
      method: "get",
    })
      .then((response) => response.json())
      .then((data) => data);

    return response;
  } catch (error) {
    console.log(error);
  }
};
