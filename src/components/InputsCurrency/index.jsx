/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import PropTypes from "prop-types";
import { NumericFormat } from "react-number-format";
import TextField from "@mui/material/TextField";
import SelectOptionCurrency from "./selectCurrency";
import { Container, ResultConvert, ContainerInputs } from "./style";
import Arrow from "../../assets/arrow.png";
import { formatCurrency } from "../../utils/formatCurrency";

const NumericFormatCustom = React.forwardRef(function NumericFormatCustom(
  props,
  ref
) {
  const { onChange, ...other } = props;
  return (
    <NumericFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator="."
      decimalSeparator=","
      valueIsNumericString
      //   prefix={"$"}
    />
  );
});

export default function FormattedInputs({ enviarDados, result }) {
  const [values, setValues] = React.useState({
    numberformat: "",
  });
  const [currencySelect, setCurrencySelect] = React.useState("USD");
  const [currencySelectResult, setCurrencySelectResult] = React.useState("BRL");

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async () => {
    const valorInput = {
      value: values.numberformat,
      currency: currencySelect,
      currencyResult: currencySelectResult,
    };

    if (currencySelect === currencySelectResult) {
      return alert("Por gentileza, colocar duas moedas diferentes!");
    }

    await enviarDados(valorInput);
    //
  };

  const handleClick = () => {
    handleSubmit();
  };

  React.useEffect(() => {
    handleSubmit();
  }, [currencySelectResult, currencySelect]);

  return (
    <Container>
      <ContainerInputs>
        <TextField
          className="input"
          label="Digite o valor"
          InputLabelProps={{
            style: {
              color: "white",
            },
          }}
          value={values.numberformat}
          onChange={handleChange}
          name="numberformat"
          id="inputNumber"
          sx={{
            "& .Mui-focusVisible": {
              "&:hover": {
                borderColor: "red",
              },
            },
          }}
          InputProps={{
            inputComponent: NumericFormatCustom,
          }}
          variant="standard"
        />
        <SelectOptionCurrency setCurrencySelect={setCurrencySelect} />
      </ContainerInputs>

      <img className="arrow" src={Arrow} alt="seta para a direita" />

      <ContainerInputs>
        <ResultConvert id="resultado">
          {formatCurrency(currencySelectResult, result)}
        </ResultConvert>

        <SelectOptionCurrency
          setCurrencySelect={setCurrencySelectResult}
          selectResult
        />
      </ContainerInputs>
      <button onClick={handleClick}>Converter</button>
    </Container>
  );
}

NumericFormatCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

FormattedInputs.propTypes = {
  enviarDados: PropTypes.func,
};
