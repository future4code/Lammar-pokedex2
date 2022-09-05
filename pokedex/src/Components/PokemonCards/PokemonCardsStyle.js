import styled from "styled-components"

export const PokemonCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    width: 20vw;
    max-width: 30vw;
    height: 60vh;
    
    border: 3px solid black;
    border-radius: 1em;
    background-color:#395aa1;

    img{
        align-items: center;
        justify-content: center;
        border: 1px solid;
        border-radius: 1em;
        background-color:#dedede;
        width: 15vw;
        

    }

    
`
export const H1 = styled.h1 `
   color: #fddd4c;
   -webkit-text-stroke: black 1px;
   font-family: 'Secular One', sans-serif;
   text-align: center;
` 
export const CardButtons = styled.div`
    display: flex;
    gap: 1em;
    margin-top: 1em;

`
export const ButtonAdd = styled.button`
font-family: 'Secular One', sans-serif;
background-color : lightgreen;
border: none;
border-radius: 1em;
padding: .7em;
cursor: pointer;

:hover{
    background-color:green;
}

`
export const ButtonDetails = styled.button`
    font-family: 'Secular One', sans-serif;
    background-color: rgba(3,169,244,1);
    border: none;
    border-radius: 1em;
    padding: .7em;
    cursor: pointer;

    :hover{
        background-color:rgba(1,101,146,1)
    }

`