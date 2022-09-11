import styled from "styled-components";

export const PokeDetailPage = styled.div``;
export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  background-color: #f34243;
  font-family: "Pokemon Solid", sans-serif;
  align-items: center;

  h1 {
    margin: 0 1em;
    color: #fddd4c;
    -webkit-text-stroke: black 2px;
    font-size: 2.5em;
    text-transform: capitalize;
    letter-spacing: 0.15em;
  }
`;

export const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  gap: 2em;
  justify-items: center;
  font-family: "Press Start 2P", cursive;
  margin: 2em;
`;

export const DivPokeFront = styled.div`
/* From uiverse.io by @Clenio21 */
  grid-area: 1 / 1 / 2 / 2;

  img {
    width: 20vw;
    align-self:center;
  }
  
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  --border-radius: 15px;
  --border-width: 4px;
  appearance: none;
  position: relative;
  padding: 1em 2em;
  border: 0;
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  z-index: 2;
  border-radius: 15px;

  :after {
    --m-i: linear-gradient(#000, #000);
    --m-o: content-box, padding-box;
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: var(--border-width);
    border-radius: var(--border-radius);
    background-image: conic-gradient(
      #488cfb,
      #29dbbc,
      #ddf505,
      #ff9f0e,
      #e440bb,
      #655adc,
      #488cfb
    );
    -webkit-mask-image: var(--m-i), var(--m-i);
    mask-image: var(--m-i), var(--m-i);
    -webkit-mask-origin: var(--m-o);
    mask-origin: var(--m-o);
    -webkit-mask-clip: var(--m-o);
    mask-composite: exclude;
    -webkit-mask-composite: destination-out;
    filter: hue-rotate(0);
    animation: rotate-hue linear 500ms infinite;
    animation-play-state: paused;
  }

  :hover::after {
    animation-play-state: running;
  }

  @keyframes rotate-hue {
    to {
      filter: hue-rotate(1turn);
    }
  }

  .card,
  :after {
    box-sizing: border-box;
  }

  :active {
    --border-width: 5px;
  }
`;
export const DivPokeBack = styled.div`
/* From uiverse.io by @Clenio21 */
  grid-area: 2 / 1 / 3 / 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  --border-radius: 15px;
  --border-width: 4px;
  appearance: none;
  position: relative;
  padding: 1em 2em;
  border: 0;
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  z-index: 2;
  border-radius: 15px;

  :after {
    --m-i: linear-gradient(#000, #000);
    --m-o: content-box, padding-box;
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: var(--border-width);
    border-radius: var(--border-radius);
    background-image: conic-gradient(
      #488cfb,
      #29dbbc,
      #ddf505,
      #ff9f0e,
      #e440bb,
      #655adc,
      #488cfb
    );
    -webkit-mask-image: var(--m-i), var(--m-i);
    mask-image: var(--m-i), var(--m-i);
    -webkit-mask-origin: var(--m-o);
    mask-origin: var(--m-o);
    -webkit-mask-clip: var(--m-o);
    mask-composite: exclude;
    -webkit-mask-composite: destination-out;
    filter: hue-rotate(0);
    animation: rotate-hue linear 500ms infinite;
    animation-play-state: paused;
  }

  :hover::after {
    animation-play-state: running;
  }

  @keyframes rotate-hue {
    to {
      filter: hue-rotate(1turn);
    }
  }

  .card,
  :after {
    box-sizing: border-box;
  }

  :active {
    --border-width: 5px;
  }
  img {
    width: 20vw;
  }
`;
export const DivPokeStats = styled.div`
/* From uiverse.io by @Clenio21 */
  grid-area: 1 / 2 / 3 / 3;
  display: flex;
  flex-direction: column;
  width: 30vw;
  gap: 8vh;
  border-radius: 0.4em;
  border-radius: 0.4em;
  --border-radius: 15px;
  --border-width: 4px;
  appearance: none;
  position: relative;
  padding: 1em 2em;
  border: 0;
  font-size: 0.9em;
  font-weight: 500;
  color: black;
  z-index: 2;
  border-radius: 15px;

  img {
    width:10vw;
    align-self:center;
  }

  :after {
    --m-i: linear-gradient(#000, #000);
    --m-o: content-box, padding-box;
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: var(--border-width);
    border-radius: var(--border-radius);
    background-image: conic-gradient(
      #488cfb,
      #29dbbc,
      #ddf505,
      #ff9f0e,
      #e440bb,
      #655adc,
      #488cfb
    );
    -webkit-mask-image: var(--m-i), var(--m-i);
    mask-image: var(--m-i), var(--m-i);
    -webkit-mask-origin: var(--m-o);
    mask-origin: var(--m-o);
    -webkit-mask-clip: var(--m-o);
    mask-composite: exclude;
    -webkit-mask-composite: destination-out;
    filter: hue-rotate(0);
    animation: rotate-hue linear 500ms infinite;
    animation-play-state: paused;
  }

  :hover::after {
    animation-play-state: running;
  }

  @keyframes rotate-hue {
    to {
      filter: hue-rotate(1turn);
    }
  }

  .card,
  :after {
    box-sizing: border-box;
  }

  :active {
    --border-width: 5px;
  }

  h1 {
    margin-top: 1em;
    text-align: center;
  }

`;
export const DivPokeType = styled.div`
/* From uiverse.io by @Clenio21 */
  grid-area:  1 / 3 / 2 / 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20vw;
  gap: 2em;
  border-radius: 0.4em;
  border-radius: 0.4em;
  --border-radius: 15px;
  --border-width: 4px;
  appearance: none;
  position: relative;
  padding: 1em 2em;
  border: 0;
  font-size: .9em;
  font-weight: 500;
  color: black;
  z-index: 2;
  border-radius: 15px;
 
 
:after {
  --m-i: linear-gradient(#000, #000);
  --m-o: content-box, padding-box;
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding: var(--border-width);
  border-radius: var(--border-radius);
  background-image: conic-gradient(
     #488cfb,
     #29dbbc,
     #ddf505,
     #ff9f0e,
     #e440bb,
     #655adc,
     #488cfb
   );
  -webkit-mask-image: var(--m-i), var(--m-i);
  mask-image: var(--m-i), var(--m-i);
  -webkit-mask-origin: var(--m-o);
  mask-origin: var(--m-o);
  -webkit-mask-clip: var(--m-o);
  mask-composite: exclude;
  -webkit-mask-composite: destination-out;
  filter: hue-rotate(0);
  animation: rotate-hue linear 500ms infinite;
  animation-play-state: paused;
 }
 
:hover::after {
  animation-play-state: running;
 }
 
 @keyframes rotate-hue {
  to {
   filter: hue-rotate(1turn);
  }
 }
 
 .card,
:after {
  box-sizing: border-box;
 }
 
:active {
  --border-width: 5px;
 }

  h1 {
    text-align: center;
  }

  p {
    font-size: 1em;
    text-align: center;
    text-transform: capitalize;
  }

  img {
    width: 10em;
    align-self:center;
    
  }
 

`;

export const DivPokeMove = styled.div`
/* From uiverse.io by @Clenio21 */
  grid-area: 2 / 3 / 3 / 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20vw;
  border-radius: 0.4em;
  border-radius: 0.4em;
  --border-radius: 15px;
  --border-width: 4px;
  appearance: none;
  position: relative;
  padding: 1em 2em;
  border: 0;
  font-size: 0.9em;
  font-weight: 500;
  color: black;
  z-index: 2;
  border-radius: 15px;

  :after {
    --m-i: linear-gradient(#000, #000);
    --m-o: content-box, padding-box;
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: var(--border-width);
    border-radius: var(--border-radius);
    background-image: conic-gradient(
      #488cfb,
      #29dbbc,
      #ddf505,
      #ff9f0e,
      #e440bb,
      #655adc,
      #488cfb
    );
    -webkit-mask-image: var(--m-i), var(--m-i);
    mask-image: var(--m-i), var(--m-i);
    -webkit-mask-origin: var(--m-o);
    mask-origin: var(--m-o);
    -webkit-mask-clip: var(--m-o);
    mask-composite: exclude;
    -webkit-mask-composite: destination-out;
    filter: hue-rotate(0);
    animation: rotate-hue linear 500ms infinite;
    animation-play-state: paused;
  }

  :hover::after {
    animation-play-state: running;
  }

  @keyframes rotate-hue {
    to {
      filter: hue-rotate(1turn);
    }
  }

  .card,
  :after {
    box-sizing: border-box;
  }

  :active {
    --border-width: 5px;
  }
  p {
    text-transform: capitalize;
    padding: 2vh;
  }
  img {
    width:10vw;
  }
`;

export const PokemonCard = styled.div``;
