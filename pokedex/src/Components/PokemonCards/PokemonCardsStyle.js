import styled from "styled-components"

export const PokemonCard = styled.div`
display: flex;
flex-direction: column;
justify-content:center;
align-items:center ;
    width: 300px;
    height: 410px;
    border: 1px solid black;
    background-color:salmon;

    img{
        border: 1px solid black;
        width: 150px;

    }

    
`
export const CardButtons = styled.div`
display: flex;
justify-content: space-between;
gap: 10px;

`
export const ButtonAdd = styled.button`
font-family: 'Secular One', sans-serif;

background-color : lightgreen;
border: none;
border-radius: 8px;
padding: 10px;
cursor: pointer;

:hover{
    background-color:green
}

`
export const ButtonDetails = styled.button`
font-family: 'Secular One', sans-serif;
background-color : rgba(3,169,244,1);
border: none;
border-radius: 8px;
padding: 10px;
cursor: pointer;

:hover{
    background-color:rgba(1,101,146,1)
}

`