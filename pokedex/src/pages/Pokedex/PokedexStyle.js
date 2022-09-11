import styled from "styled-components";

export const PokedexPage = styled.div``;

export const WarningMessageDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 90vw;
  height: 60vh;
  border: 3px solid black;
  border-radius: 1em;
  background-color: #395aa1;

  h1 {
    color: #fddd4c;
    -webkit-text-stroke: black 1px;
    font-family: "Secular One", sans-serif;
    text-align: center;
  }
  img {
    width: 15em;
  }
`;
export const H1 = styled.h1`
  color: #fddd4c;
  -webkit-text-stroke: black 1px;
  font-family: "Secular One", sans-serif;
  text-align: center;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: #f34243;
  font-family: "Pokemon Solid", sans-serif;
  align-items: center;
  h1 {
    margin: 0 1em;
    color: #fddd4c;
    -webkit-text-stroke: black 2px;
    font-size: 2.5em;
    letter-spacing:.1em;
  }
`;
export const ButtonReturn = styled.button`
  --button_radius: 0.75em;
  --button_color: #e8e8e8;
  --button_outline_color: #000000;
  font-size: 17px;
  font-weight: bold;
  border: none;
  border-radius: var(--button_radius);
  background: var(--button_outline_color);
  cursor: pointer;

  span {
    display: block;
    box-sizing: border-box;
    border: 2px solid var(--button_outline_color);
    border-radius: var(--button_radius);
    padding: 0.5em 1em;
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
`;
export const Main = styled.main`
  display: flex;
  flex-wrap: wrap;

  gap: 1em;
  align-items: center;
  justify-content: center;
  margin: 1em 0;
`;

export const PokemonCard = styled.div``;
