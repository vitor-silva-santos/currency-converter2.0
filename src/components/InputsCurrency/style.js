import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  gap: 20px;

  .arrow {
    transform: rotate(270deg);
    width: 80px;
  }

  button {
    background-color: transparent;
    border: 1px solid gold;
    color: gold;
    padding: 15px 25px;
    border-radius: 50px;
    cursor: pointer;
    margin-top: 30px;

    &:active {
      background-color: rgba(255, 217, 0, 0.107);
      transition: 0s;
    }
  }
`;

export const ContainerInputs = styled.div`
  display: flex;
  align-items: end;
  border-bottom: 1px solid gold;

  /* Input de entrada de valor e seletores de opções de moedas */
  .MuiInputBase-input {
    border-bottom: 1px solid gold;
    color: white;
    width: 150px;
    min-width: 100px;
    padding: 5px 10px;
  }

  /* seletores de opções de moedas */
  .MuiSelect-select {
    display: flex;
    gap: 20px;
    padding-left: 10px;

    .ArrowDropDownIcon {
    }
  }

  .MuiInput-underline:after {
    border-color: gold;
  }

  .muioutlinedinput-root {
    &:hover fieldset {
      border-color: red;
    }
  }
`;

export const ResultConvert = styled.div`
  min-width: 150px;
  max-width: 200px;
  height: 30px;
  border-bottom: 1px solid rgb(182, 155, 4);
  display: flex;
  align-items: center;
  color: darkgray;
`;
