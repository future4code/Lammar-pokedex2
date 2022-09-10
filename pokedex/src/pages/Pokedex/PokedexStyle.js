import styled from 'styled-components';


export const PokedexPage = styled.div `


`

export const WarningMessageDiv = styled.div`
      display: flex;
      flex-direction: column;
      justify-content:space-evenly;
      align-items:center;
      width: 90vw;
      height: 40vh;
      border: 3px solid black;
      border-radius: 1em;
      background-color:#395aa1;

      h1 {
         color: #fddd4c;
         -webkit-text-stroke: black 1px;
         font-family: 'Secular One', sans-serif;
         text-align: center;
      }
      
`
export const H1 = styled.h1 `
   color: #fddd4c;
   -webkit-text-stroke: black 1px;
   font-family: 'Secular One', sans-serif;
   text-align: center;
` 



export const Header =  styled.header `
   display: flex;
   justify-content: space-between;
   background-color: #dd122c;
   font-family: 'Pokemon Solid', sans-serif;
   align-items: center;
   h1{
      margin: 0 1em;
      color: #fddd4c;  
      -webkit-text-stroke: black 2px;
      font-size: 2.5em;
   }

`
export const Button =  styled.button `
   font-family: 'Pokemon Solid', sans-serif;
   color: #fddd4c;
   -webkit-text-stroke: black 1px;
   background-color: #25acfa;
   border: none;
   border-radius: 1em;
   width: 10em;
   height: 3em;
   margin: 0 1em;
   cursor: pointer;
   :hover{
      background-color: #fddd4c;
      color: #fff;
      -webkit-text-stroke: black 1px;
   }
`
export const Main = styled.main`
   display: flex;
   flex-wrap: wrap;
   
   gap: 1em;
   align-items: center ;
   justify-content: center;
   margin: 1em 0 ;
`


export const PokemonCard = styled.div`


`