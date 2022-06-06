import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import bebezin from "../images/button.png";
import Header from "../images/header.png";

export default function HomePage() {    
    const navigate = useNavigate();

    function goToMenu(){
        navigate("/menu")
    }

  return (
    <Container>
      <img src={Header} alt="Logo Header" />
      <span>Se voce recebeu este convite saiba que: </span>

      <h4>
        Voce é uma pessoa <strong>muito especial</strong> para meu papai e minha mamãe. Estou
        quase chegando para vc poder me dar um cheiro!</h4>
        <h4>Mas para isto acontecer
        preciso da sua ajuda. Irei passar as coordenadas de como vc pode me
        ajudar.</h4>
      <h6>Clique no botão abaixo.</h6>
      <img onClick={() => goToMenu()} src={bebezin} alt="Arthur Poderoso" height="280px" />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 3rem;

  strong{
      font-weight: 700;
  }
  img {
    :first-child {
      width: 100%;
      height: 100px;
      object-fit: contain;
    }
    object-fit: contain;
    :hover{
        cursor: pointer;
    }
  }
  span {
    font-family: childWriting;
    font-size: 38px;
  }
  h4 {
    font-family: "Montserrat";
    font-size: 28px;
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
    font-weight: 200;
    color: #ffffff;
  }
`;
