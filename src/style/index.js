import styled from "styled-components";

export const Container = styled.div`
  padding: 60px 10px;
  background-color: #000050;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;

  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  color: gold;
  font-weight: 700;
  font-size: 33px;
  text-align: center;

  @media screen and (min-width: 730px) {
    font-size: 38px;
  }
`;
