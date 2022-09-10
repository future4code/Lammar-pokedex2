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
      -webkit-text-stroke: black 1px;
      font-size: 2.5em;
      letter-spacing:.1em;
   }
`
export const Button =  styled.button ` 
   --button_radius: 0.75em;
   --button_color: #e8e8e8;
   --button_outline_color: #000000;
   font-size: 1em;
   font-weight: bold;
   border: none;
   border-radius: var(--button_radius);
   background: var(--button_outline_color);
   cursor: pointer;
   img {
      width: 2em;
   }
   span {
   display: block;
   box-sizing: border-box;
   border: 2px solid var(--button_outline_color);
   border-radius: var(--button_radius);
   padding: 0.4em;
   background: var(--button_color);
   color: var(--button_outline_color);
   transform: translateY(-0.2em);
   transition: transform 0.1s ease;
   }

   :hover span {
   /* Pull the button upwards when hovered */
   background: royalblue;
   transform: translateY(-0.35em);
   }

   :active span {
   /* Push the button downwards when pressed */
   transform: translateY(0);
   }
`
export const Main = styled.main`
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
   gap: 2em;
   align-items: center ;
   justify-items: center;
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

