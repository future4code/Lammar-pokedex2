import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PagePickers } from '../../Components/PagePicker/PagePicker';
import { PokemonCards } from "../../Components/PokemonCards/PokemonCards";
import * as RoutePages from "../../router/Coodinator";
import { Button, Footer, Header, HomePage, Main } from "./HomeStyle";
import { PokedexContext } from "../../Context/Context";

export function Home() {
  const navigate = useNavigate();
  const [pokeDisplay, setpokeDisplay] = useState([]);
  const [pokePage, setpokePage] = useState(1)
  const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
  const limit = 20;
  const offset = (pokePage * limit);
  const pokeArray = [];
  const context = useContext(PokedexContext)

  useEffect(() => {
    axios.get(`${BASE_URL}?limit=898`).then((response) => {
      response.data.results
        .map((pokemon) => {
          return { name: pokemon.name, url: pokemon.url };
        })
        .map((pokemon, index) => {
          axios.get(pokemon.url).then((response) => {
            if (
              pokeArray.some((e) => e.name === response.data.name) === false
            ) {
              pokeArray.push({
                name: response.data.name,
                img: response.data.sprites.front_default,
                id: index + 1,
                url: pokemon.url,
                key: index,
              });
              setpokeDisplay([...pokeArray]);
            }
          });
        });
    });
  }, []);


  const pokeFront =
    pokeDisplay &&
    pokeDisplay
      .filter((pokemon, index) => index >= (offset-limit) && index < offset)
      .map((pokemon) => (
        <PokemonCards
          pokeId={pokemon.id}
          key={pokemon.key}
          pokeName={pokemon.name}
          pokeImage={pokemon.img}
          pokeUrl={pokemon.url}
          addToPokedex= {context.addToPokedex}
        ></PokemonCards>
      ));

  return (
    <HomePage>
      <Header>
        <h1>Pokemon</h1>
        <Button onClick={() => RoutePages.goPokedex(navigate)}>
          Ir para pokedex
        </Button>
      </Header>
      <Main>{pokeFront}</Main>
      <Footer>
        <PagePickers pageNumber = {pokePage} setPage = {setpokePage}></PagePickers>
      </Footer>
    </HomePage>
  );
}
