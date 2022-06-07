import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Header from "../images/header.png";
import footer from "../images/inteligente.png";

export default function MenuPage() {
  const navigate = useNavigate();

  function goToAgradecimentos() {
    navigate("/agradecimentos");
  }
  function goToRifinha(){
    navigate("/rifa")
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
      <button>MINHAS FOTINHAS</button>
      <button onClick={() => goToRifinha()}>RIFINHA DO ARTHUR</button>
      <button>ENDEREÇO DO LOCAL</button>
      <button onClick={() => goToAgradecimentos()}>AGRADECIMENTOS</button>
      <div>
        <img src={footer} alt="Logo Header" />
        <span>Sou um bebe super tecnologico, clique na opcao que você deseja...</span>
      </div>
    </ContainerMenu>
  );
}
const Legenda = styled.div`
  display: flex;
  margin-top: 10px;
`;

const ContainerMenu = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 3rem;
    div{
        margin-top: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
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
    font-size: 18px;
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
    height: 80px;
    color: #ffffff;
    margin-top: 20px;
    font-family: "Montserrat";
    font-weight: 600;
    font-size: 28px;
    border: thin solid #00aeff;
    border-radius: 5px;
    background-image: linear-gradient(#1c556d, #10242b);

    :hover {
      box-shadow: 0px 0px 20px #00aeff;
    }
  }
`;
