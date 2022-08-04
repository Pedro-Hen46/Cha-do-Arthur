import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Header from "../images/header.png";
import footer from "../images/inteligente.png";

export default function MenuPage() {
  const navigate = useNavigate();

  function goToAgradecimentos() {
    navigate("/agradecimentos");
  }
  function goToGalleyImages(){
    navigate("/galeria");

  }

  return (
    <ContainerMenu>
      <img src={Header} alt="Logo Header" />
      <Legenda>
        <h4>
          <strong>LOCAL: </strong>CASA DA VÓVÓ CAMILA
        </h4>
        <h4>
          <strong>DATA: </strong>21/AGOSTO
        </h4>
        <h4>
          <strong>HORÁRIO: </strong>13:00H
        </h4>
      </Legenda>
      <button onClick={() => goToGalleyImages()}>GALERIA DE FOTOS</button>
      <button>O QUE LEVAR NO DIA?</button>

      <button><a
          href="https://www.google.com.br/maps/place/22%C2%B003'57.3%22S+51%C2%B025'13.0%22W/@-22.0659169,-51.4211737,18z/data=!3m1!4b1!4m6!3m5!1s0x0:0x7b17a27d348ce771!7e2!8m2!3d-22.065919!4d-51.4202656?shorturl=1"
          target="_blank" rel="noreferrer"
        >
          ENDEREÇO DO LOCAL
        </a></button>

      <button>
        <a
          href="https://calendar.google.com/event?action=TEMPLATE&tmeid=NmxrN3M0ZHZjcDJ0Z3Z0MzAzcTQ3dWJwajUgbTU4M2luYXF2dnExanQ0dDM3dnYyNW5mcjhAZw&tmsrc=m583inaqvvq1jt4t37vv25nfr8%40group.calendar.google.com"
          target="_blank" rel="noreferrer"
        >
          ADICIONE NA SUA AGENDA
        </a>
      </button>
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
  width: 100%;

  margin-top: 2px;

  h4 {
    margin-right: 20px;
  }
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
  a{
    font-family: "Montserrat";
    font-weight: 400;
    font-size: 20px;
    color: #ffffff;
    text-decoration: none;
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
