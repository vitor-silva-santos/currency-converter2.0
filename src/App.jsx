import { useEffect, useState } from "react";
import { getCurrencyMounth, getCurrencyValue } from "./services/currency";
import Chart from "./components/Chart";
import { Title, Container } from "./style";
import calcConvertCurrency from "./utils/calcConvertCurrency";
import InputsCurrency from "./components/InputsCurrency";

function App() {
  const [dataCurrencyMounth, setDataCurrencyMounth] = useState([]);
  const [currencyValue, setCurrencyValue] = useState("0");
  const [dadosFormulario, setDadosFormulario] = useState({
    value: 0,
    currency: "USD",
    currencyResult: "BRL",
  });
  const [resultConvert, setResultConvert] = useState("");

  const handleDadosFormulario = (dados) => {
    setDadosFormulario(dados);
  };

  async function fetchCurrencyMounth({ currency, currencyResult }) {
    const dataCurrencyMounth = await getCurrencyMounth(
      `${currency}-${currencyResult}`
    );
    const dataCurrencyToday = await getCurrencyValue(
      `${currency}-${currencyResult}`
    );
    setDataCurrencyMounth(dataCurrencyMounth);
    setCurrencyValue(dataCurrencyToday[currency + currencyResult].high);
  }

  function resultCalc({ value }, currencyValue) {
    setResultConvert(calcConvertCurrency(value, currencyValue));
  }

  useEffect(() => {
    fetchCurrencyMounth(dadosFormulario);
    resultCalc(dadosFormulario, currencyValue);
  }, [dadosFormulario, currencyValue]);

  return (
    <Container>
      <Title>Conversor de Moedas</Title>

      <InputsCurrency
        enviarDados={handleDadosFormulario}
        result={resultConvert}
      />
      <Chart data={dataCurrencyMounth} />
    </Container>
  );
}

export default App;
