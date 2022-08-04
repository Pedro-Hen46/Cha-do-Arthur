import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import pezinho from "../images/OqueLevar.png";
import Header from "../images/header.png";


export default function Products() {
  const navigate = useNavigate();

  function backToMenu() {
    navigate("/menu");
  }

  return (
    <Container>
      <h1>PRODUTOS QUE PRECISO</h1>
      <img src={Header} alt="Logo Header" />
      <br />
      <h5>“A cegonha está chegando! E para comemorar com muita alegria este momento, mamãe e papai convidam você para meu chá de bebê.”</h5>

     
      <img className="galeria1" src={pezinho} alt="Logo Header" />

      
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
    width: 110%;
    height: auto;
    margin-bottom: 20%;

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
