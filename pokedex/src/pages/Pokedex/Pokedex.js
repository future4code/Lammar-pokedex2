import axios from "axios";
import React from "react";
import { useEffect, useState, useContext } from "react";
import { PokemonCards } from "../../Components/PokemonCards/PokemonCards";
import { Footer } from "../Home/HomeStyle";
import {
  Header,
  Main,
  PokedexPage,
  ButtonReturn,
  WarningMessageDiv,
} from "./PokedexStyle";
import * as RoutePages from "../../router/Coodinator";
import { useNavigate } from "react-router-dom";
import { PokedexContext } from "../../Context/Context";

export function Pokedex() {
  const context = useContext(PokedexContext);
  const navigate = useNavigate();
  const pokeArray = [];
  const [pokedexDisplay, setpokedexDisplay] = useState([]);

  useEffect(() => {
    context.pokedexArray.map((pokemon, index) => {
      axios.get(pokemon).then((response) => {
        if (pokeArray.some((e) => e.name === response.data.name) === false) {
          pokeArray.push({
            name: response.data.name,
            img: response.data.sprites.front_default,
            id: response.data.id,
            url: pokemon,
            key: index,
          });
          setpokedexDisplay([...pokeArray]);
        }
      });
    });
  }, [context.pokedexArray]);

  const pokeFront =
    pokedexDisplay &&
    pokedexDisplay.map((pokemon) => (
      <PokemonCards
        pokeId={pokemon.id}
        key={pokemon.key}
        pokeName={pokemon.name}
        pokeImage={pokemon.img}
        pokeUrl={pokemon.url}
        pokeButton={0}
      ></PokemonCards>
    ));

  if (context.pokedexArray.length < 1) {
    return (
      <PokedexPage>
        <Header>
          <h1>Pokédex</h1>
        
          <ButtonReturn onClick={() => RoutePages.goBack(navigate)}>
            <span>
            Voltar para lista
            </span>
          </ButtonReturn>
        </Header>
        <Main>
          <WarningMessageDiv>
            <h1>Você ainda não adicionou nenhum pokémon a sua Pokédex!</h1>
            <img src = "https://br.web.img3.acsta.net/newsv7/19/05/08/00/25/4780689.jpg" alt = "Pikachu assustado"/>
            <h1>Retorne para a Home para adicionar Pokémons.</h1>
          </WarningMessageDiv>
        </Main>
        <Footer></Footer>
      </PokedexPage>
    );
  }
  return (
    <PokedexPage>
      <Header>
        <h1>Pokemon</h1>
        <ButtonReturn onClick={() => RoutePages.goBack(navigate)}>
          <span>Voltar para lista</span>
        </ButtonReturn>
      </Header>
      <Main>{pokeFront}</Main>
      <Footer></Footer>
    </PokedexPage>
  );
}
