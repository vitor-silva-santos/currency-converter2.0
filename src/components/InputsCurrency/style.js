import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  .input {
    width: 100px;
    min-width: 100px;
  }

  .arrow {
    transform: rotate(180deg);
  }
`;

export const ResultConvert = styled.div`
  min-width: 150px;
  max-width: 200px;
  height: 40px;
  border: 1px solid black;
`;
