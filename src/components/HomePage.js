import styled from "styled-components"

import bebezin from "../images/bebezin.png"

export default function HomePage(){

    return (
        <Container>
            <h1>Eu sou o chá de bebe do Arthur Henrique</h1>
            <span>Ainda em desenvolvimento</span>
            <img src={bebezin} alt="Arthur Poderoso" />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    padding: 2rem;

    h1{
        font-size: 36px;
        font-weight: bold;
        color: #FFFFFF;
    }
    span{
        font-weight: 200;
        color: #FFFFFF;
    }
`