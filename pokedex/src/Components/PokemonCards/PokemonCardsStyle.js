import styled from "styled-components";

export const PokemonCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25vw;
  height: 60vh;
  border-radius: 0.4em;
  background: rgb(255, 255, 255);
  box-shadow: 0.3em 0.3em 0.7em #00000015;
  transition: border 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: rgb(250, 250, 250) 0.2em solid;

  :hover {
    border: #006fff 0.2em solid;
  }

  img {
    align-items: center;
    justify-content: center;
    border: 1px solid;
    border-radius: 1em;
    background-color: #dedede;
    width: 15vw;
  }
`;
export const H1 = styled.h1`
  color: #fddd4c;
  -webkit-text-stroke: rgb(54, 106, 189) 0.5px;
  font-family: 'Pokemon Solid', sans-serif;
  text-align: center;
  text-transform: capitalize;
  letter-spacing:.1em;
`;
export const CardButtons = styled.div`
  display: flex;
  gap: 1em;
  margin-top: 1em;
`;
export const ButtonAdd = styled.button`
  --button_radius: 0.75em;
  --button_color: #e8e8e8;
  --button_outline_color: #000000;
  font-size: 1em;
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
    padding: 0.5em;
    background: var(--button_color);
    color: var(--button_outline_color);
    transform: translateY(-0.2em);
    transition: transform 0.1s ease;
  }

  :hover span {
    /* Pull the button upwards when hovered */
    background: #23c483;
    transform: translateY(-0.35em);
  }

  :active span {
    /* Push the button downwards when pressed */
    transform: translateY(0);
    
  }
`;

export const ButtonRemove = styled.button`
  --button_radius: 0.75em;
  --button_color: #e8e8e8;
  --button_outline_color: #000000;
  font-size: 1em;
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
    padding: 0.5em;
    background: var(--button_color);
    color: var(--button_outline_color);
    transform: translateY(-0.2em);
    transition: transform 0.1s ease;
  }

  :hover span {
    /* Pull the button upwards when hovered */
    background: #ce1d1d;
    transform: translateY(-0.35em);
  }

  :active span {
    /* Push the button downwards when pressed */
    transform: translateY(0);
  }
`;

export const ButtonDetails = styled.button`
  --button_radius: 0.75em;
  --button_color: #e8e8e8;
  --button_outline_color: #000000;
  font-size: 1em;
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
    padding: 0.5em;
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
