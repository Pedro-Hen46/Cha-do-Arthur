import { useState } from "react";
import styled from "styled-components";
import ButtonRifa from "./ButtonRifa";

export default function Rifinha() {
  const [rifas, setRifas] = useState([
    { name: 1, disponibilidade: true },
    { name: 2, disponibilidade: true },
    { name: 3, disponibilidade: true },
    { name: 4, disponibilidade: true },
    { name: 5, disponibilidade: true },
    { name: 6, disponibilidade: true },
    { name: 7, disponibilidade: true },
    { name: 8, disponibilidade: true },
    { name: 9, disponibilidade: true },
    { name: 10, disponibilidade: true },
    { name: 11, disponibilidade: true },
    { name: 12, disponibilidade: true },
    { name: 13, disponibilidade: true },
    { name: 14, disponibilidade: true },
    { name: 15, disponibilidade: true },
    { name: 16, disponibilidade: true },
    { name: 17, disponibilidade: true },
    { name: 18, disponibilidade: true },
    { name: 19, disponibilidade: true },
    { name: 20, disponibilidade: true },
    { name: 21, disponibilidade: true },
    { name: 22, disponibilidade: true },
    { name: 23, disponibilidade: true },
    { name: 24, disponibilidade: true },
    { name: 25, disponibilidade: true },
    { name: 26, disponibilidade: true },
    { name: 27, disponibilidade: true },
    { name: 28, disponibilidade: true },
    { name: 29, disponibilidade: true },
    { name: 30, disponibilidade: true },
    { name: 31, disponibilidade: true },
    { name: 32, disponibilidade: true },
    { name: 33, disponibilidade: true },
    { name: 34, disponibilidade: true },
    { name: 35, disponibilidade: true },
    { name: 36, disponibilidade: true },
    { name: 37, disponibilidade: true },
    { name: 38, disponibilidade: true },
    { name: 39, disponibilidade: true },
    { name: 40, disponibilidade: true },
    { name: 41, disponibilidade: true },
    { name: 42, disponibilidade: true },
    { name: 43, disponibilidade: true },
    { name: 44, disponibilidade: true },
    { name: 45, disponibilidade: true },
    { name: 46, disponibilidade: true },
    { name: 47, disponibilidade: true },
    { name: 48, disponibilidade: true },
    { name: 49, disponibilidade: true },
    { name: 50, disponibilidade: true },
  ]);

  return (
    <ContainerRifa>
      <h4>SELECIONE OS NÚMEROS PARA PARTICIPAR DA RIFA:</h4>
      <LegendaButtons>
        <button></button>
        <h6>DISPONÍVEL</h6>
        <button></button>
        <h6>INDISPONÍVEL</h6>
      </LegendaButtons>

      <Numeros>
        {rifas.map((rifa, index) => (
          <ButtonRifa key={index} data={rifa} />
        ))}
      </Numeros>
    </ContainerRifa>
  );
}
const LegendaButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  h6 {
    font-family: "Montserrat";
    font-size: 16px;
    color: #ffffff;
    font-weight: 300;
    font-style: italic;
    margin-right: 20px;
  }

  button {
    margin-right: 5px;
    width: 30px;
    height: 30px;
    border-radius: 5px;
    border: thin solid #00aeff;
    background-color: #1c556d;

    :last-child{
        background-color: red !important;
    }
  }
`;

const Numeros = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

const ContainerRifa = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;

  h1 {
    font-family: bossBaby;
    font-size: 25px;
    font-weight: bold;
    color: #ffffff;
  }

  h4 {
    font-family: "Montserrat";
    font-size: 28px;
    color: #ffffff;
    font-weight: 700;
    margin-bottom: 30px;
  }
`;
