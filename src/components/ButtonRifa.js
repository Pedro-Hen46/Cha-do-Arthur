import styled from "styled-components"


export default function ButtonRifa({data}){
    
    return(
        <ContainerButton>
            <button>{data.name}</button>
        </ContainerButton>
    )
}
const ContainerButton = styled.div`
    button{
        margin-right: 10px;
        margin-bottom: 10px;
        width: 70px;
        height: 70px;
        border-radius: 5px;
        border: thin solid #00aeff;
        background-color: #1c556d;

        font-family: "Montserrat";
        font-size: 26px;
        font-weight: bold;
        color: white;
    }

`
