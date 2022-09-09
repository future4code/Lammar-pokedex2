import styled from 'styled-components';


export const HomePage = styled.div `


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

export const Footer = styled.footer`
   display:flex;
   flex-direction:row;
   height: 5vh;
   justify-content: space-between;
   margin-right: 20vw;
   margin-left: 20vw;


`

