import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import currencies from "./option-currency";
import arrow from "../../assets/arrow.png";

export default function SelectTextFields({ setCurrencySelect, selectResult }) {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 0, width: "130px" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="standard-select-currency"
          select
          defaultValue={selectResult ? "BRL" : "USD"}
          variant="standard"
          onChange={(currency) => {
            setCurrencySelect(currency.target.value);
          }}
          popupIcon={<img src={arrow} width={"25px"} />}
        >
          {currencies.map((currency) => (
            <MenuItem key={currency.value} value={currency.value}>
              <img src={currency.label} />
              <span>{currency.value}</span>
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
}

SelectTextFields.propTypes = {
  setCurrencySelect: PropTypes.func,
  selectResult: PropTypes.bool,
};
