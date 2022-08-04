import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Header from "../images/header.png";
import footer from "../images/inteligente.png";

export default function MenuPage() {
  const navigate = useNavigate();

  function goToAgradecimentos() {
    navigate("/agradecimentos");
  }
  function goToRifinha() {
    navigate("/rifa");
  }

  return (
    <ContainerMenu>
      <img src={Header} alt="Logo Header" />
      <Legenda>
        <h4>
          <strong>LOCAL: </strong>CASA DA VÓVÓ CAMILA
        </h4>
        <h4>
          <strong>DATA: </strong>10/JULHO
        </h4>
        <h4>
          <strong>HORÁRIO: </strong>11:30H
        </h4>
      </Legenda>
      <button>GALERIA DE FOTOS</button>
      <button>O QUE LEVAR NO DIA?</button>
      <button>ENDEREÇO DO LOCAL</button>
      <button onClick={() => goToAgradecimentos()}>AGRADECIMENTOS</button>
      <div>
        <img src={footer} alt="Logo Header" />
        <span>
          Sou um bebe super tecnologico, clique na opcao que você deseja...
        </span>
      </div>
    </ContainerMenu>
  );
}
const Legenda = styled.div`
  display: flex;
  margin-top: 2px;
`;

const ContainerMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 3rem;

  @media (max-width: 750px) {
    display: flex;
    justify-content: flex-start;
  }

  div {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 220px;
    }
  }
  strong {
    font-weight: 700;
  }
  img {
    width: 100%;
    height: 100px;
    object-fit: contain;
  }
  span {
    font-family: childWriting;
    font-size: 38px;
  }
  h4 {
    font-family: "Montserrat";
    font-size: 12px;
    color: white;
  }
  h6 {
    font-family: "Montserrat";
    font-weight: 300;
    font-style: italic;
    text-decoration: overline;
    color: white;
  }
  h1 {
    font-family: bossBaby;
    font-size: 36px;
    font-weight: bold;
    color: #ffffff;
  }
  span {
    font-weight: 300;
    font-size: 28px;
    color: #ffffff;
  }

  button {
    width: 100%;
    min-height: 60px;
    height: 80px;
    color: #ffffff;
    margin-top: 20px;
    font-family: "Montserrat";
    font-weight: 400;
    font-size: 20px;
    border: thin solid #00aeff;
    border-radius: 5px;
    background-image: linear-gradient(#1c556d, #10242b);

    transition: 0.2s linear;
    :hover {
      box-shadow: 0px 0px 20px #00aeff;
      cursor: pointer;
      font-weight: 600;
    }
  }
`;
