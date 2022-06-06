import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import bebezin from "../images/agradecimento.png";
import arrow from "../images/down-arrow.png";
import Header from "../images/header.png";

export default function Agradecimentos() {
  const navigate = useNavigate();

  function backToMenu() {
    navigate("/menu");
  }

  return (
    <Container>
      <h1>AGRADECIMENTOS ESPECIAIS</h1>
      <img src={Header} alt="Logo Header" />

      <span>Se voce recebeu este convite saiba que: </span>

      <h4>VÓVÓ CAMILA E VOVÔ NILSON</h4>
      <h5>
        SEM A AJUDA DE VOCÊS NADA DISTO SERIA POSSÍVEL, DESDE QUANDO RECEBERAM A
        NOTÍCIA DA MINHA VINDA FIZERAM DE TUDO PARA QUE EU TIVESSE O MELHOR
        CONFORTO. COM TODA CERTEZA SEMPRE LEMBRAREMOS DE TUDO COM MUITO AMOR E
        CARINHO!
      </h5>
      <h4>VÓVÓ DAIANE E VOVÔ LUIZ H.</h4>
      <h5>
        OBRIGADO POR TODAS AS DICAS E EXPERIÊNCIAS PASSADAS PARA MEUS PAPAIS.
        NÃO VEJO A HORA DE ESTAR ENTRE VOCÊS GRITANDO E PULANDO NA CAMA DE
        VOCÊS.
      </h5>
      <h4>TIA PAMELA E TIO GUSTAVO</h4>
      <h5>
        MEUS PAIS ME CONTARAM QUE VOCÊS FORAM AS PRIMEIRAS PESSOAS QUE ME DERAM
        MIMOS! EU AMEI TITIA E TITIO, MAL POSSO ESPERAR PARA NÓS ESTARMOS
        JUNTOS... BEIJINHOS PRA VCS.
      </h5>

      <h4>A TODOS QUE FIZERAM PARTE DISSO</h4>
      <h5>
        SÃO MUITAS PESSOAS E NÃO CONSIGO ME LEMBRAR DE TODOS, AFINAL AINDA SOU
        UM BÊBÊ. MAS GOSTARIA DE AGRADECER A TODOS QUE DE ALGUMA FORMA LEMBRARAM
        DE MIM E AJUDARAM OS MEUS PAIS A TRAZER O BEBE MAIS LINDO DESSE MUNDO.
      </h5>
      <Arrow>
        <img src={arrow} alt="Descer pagina" />
      </Arrow>
      <Footer>
        <img src={bebezin} alt="Logo Header" />
        <div>
          <span>
            "A alegria da minha chegada já começa com a união de todos que eu amo
            na minha festinha de chá de bebê."
          </span>
          <h6>COM AMOR E CARINHO, ARTHUR.</h6>
        </div>
      </Footer>
    </Container>
  );
}
const Arrow = styled.div`
  position: fixed;
  bottom: 5px;

  img {
    height: 40px !important;
    fill: white;
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

  img {
    width: 100%;
    height: 100px;
    object-fit: contain;
  }

  h1 {
    font-family: bossBaby;
    font-size: 28px;
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
    font-family: "Montserrat";
    font-size: 18px;
    font-style: italic;
    font-weight: 300;
    color: white;
    margin-bottom: 30px;
  }
  span {
      font-family: "Montserrat";
      font-size: 18px;
      font-weight: 200;
      margin-bottom: 10px;
    color: white;
  }
`;
