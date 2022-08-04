import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import bebezin from "../images/bebezin.png";
import pezinho from "../images/teste.jpg";
import hcg from "../images/hcg.png";
import Header from "../images/header.png";
import ultrassom from "../images/1ultrassom.png";
import ultrassom2 from "../images/2ultrassom.png";
import agradecimento from "../images/final.png";


export default function GalleryImages() {
  const navigate = useNavigate();

  function backToMenu() {
    navigate("/menu");
  }

  return (
    <Container>
      <h1>Galeria de fotos</h1>
      <img src={Header} alt="Logo Header" />
      <br />
      <h5>Seja bem vindo a minha galeria de fotos!</h5>
      <br />
      <br />

      <img className="galeria" src={pezinho} alt="Logo Header" />
      <h5>
        "Tudo começou com minha mãe passando muito enjoo, então decidiram fazer
        o teste de farmácia, foi ai que souberam que o chefinho estava a caminha..."
      </h5>

      <Footer>
        <img src={bebezin} alt="Logo Header" />
        <div>
          <h5>"Mamãe, eu não quero usar AllStar, isso agride a moda..."</h5>
        </div>
      </Footer>

      <img className="galeria1" src={hcg} alt="Logo Header" />

      <img className="galeria1" src={ultrassom} alt="Logo Header" />

      <img className="galeria1" src={ultrassom2} alt="Logo Header" />

      <img className="galeria1" src={agradecimento} alt="Logo Header" />

      <br />
      <br />

      <Arrow onClick={() => backToMenu()}>
        <ion-icon name="arrow-back"></ion-icon>
      </Arrow>
     
    </Container>
  );
}
const Arrow = styled.div`
  background-color: white;
  z-index: 1;
  width: 40px;
  height: 40px;
  position: fixed;
  top: 10px;
  left: 6px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  ion-icon {
    font-size: 26px;
    color: rgba(0, 212, 255, 1);
  }
  transition: 0.2s linear;
  :hover {
    cursor: pointer;
    width: 50px;
    height: 50px;
  }
`;

const Footer = styled.div`
  display: flex;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  img {
    height: 200px !important;
  }
  h6 {
    font-family: ChildWriting;
    font-size: 16px;
    font-weight: 300;
    color: white;
    margin-bottom: 10px;
  }
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 3rem;

  .galeria {
    object-fit: cover;
    border-radius: 10px;
    width: 70%;
    height: 300px;
    margin-bottom: 40px;

    box-shadow: 0px 0px 30px #00aeff;
  }
  .galeria1 {
    object-fit: cover;
    border-radius: 10px;
    width: 100%;
    height: auto;
    margin-bottom: 40px;

  }

  img {
    width: 100%;
    height: 100px;
    object-fit: contain;
  }

  h1 {
    font-family: bossBaby;
    font-size: 22px;
    text-align: center;
    font-weight: bold;
    color: #ffffff;
  }
  h4 {
    font-family: "Montserrat";
    font-size: 22px;
    font-weight: 700;
    color: white;
    margin-bottom: 10px;
  }
  h5 {
    text-align: center;
    font-family: "Montserrat";
    font-size: 12px;
    font-style: italic;
    font-weight: 300;
    color: white;
    margin-top: -20px;
    margin-bottom: 10px;
  }
  span {
    font-family: "Montserrat";
    font-size: 18px;
    font-weight: 200;
    margin-bottom: 10px;
    color: white;
  }
`;
