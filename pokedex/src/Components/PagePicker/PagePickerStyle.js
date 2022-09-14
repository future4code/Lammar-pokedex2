import styled from "styled-components";

export const PagePicker = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100vw;
  gap: 1em;
  

  button {
    --button_radius: 0.75em;
    --button_color: #e8e8e8;
    --button_outline_color: #000000;
    font-size: 0.8em;
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
  }
`;
