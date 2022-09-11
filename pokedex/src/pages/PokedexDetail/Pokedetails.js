import axios from "axios";
import React from "react";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { DivPokeFront, Header, Main, PokeDetailPage, DivPokeBack, DivPokeStats, DivPokeType, DivPokeMove } from "./PokedexDetailsStyled";
import { ButtonAdd, ButtonRemove, ButtonDetails } from "../../Components/PokemonCards/PokemonCardsStyle";
import { BASE_URL } from "../../constants/constants";
import * as RoutePages from "../../router/Coodinator";
import { useNavigate } from "react-router-dom";
import { PokedexContext } from "../../Context/Context";


export function Pokedetails() {
  const context = useContext(PokedexContext);
  const pathParams = useParams();
  const [currentPoke, setCurrentPoke] = useState({});
  const navigate = useNavigate();
  const pokemonUrl = `${BASE_URL}${pathParams.id}/`;
  

  

  useEffect(() => {
    axios.get(`${BASE_URL}${pathParams.id}`).then((response) => {
      const pokemon = response.data;
      if (pokemon.types.length <= 1) {
        setCurrentPoke({
          name: pokemon.name,
          front_img: pokemon["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"],
          back_img: pokemon["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["back_default"],
          type1: pokemon.types[0].type.name,
          move1: pokemon.moves[0].move.name,
          move2: pokemon.moves[1].move.name,
          move3: pokemon.moves[2].move.name,
          hp: pokemon.stats[0].base_stat,
          attack: pokemon.stats[1].base_stat,
          defense: pokemon.stats[2].base_stat,
          special_attack: pokemon.stats[3].base_stat,
          special_defense: pokemon.stats[4].base_stat,
          speed: pokemon.stats[5].base_stat,
        });
      } else {
        setCurrentPoke({
          name: pokemon.name,
          front_img: pokemon["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"],
          back_img: pokemon["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["back_default"],
          type1: pokemon.types[0].type.name,
          type2: pokemon.types[1].type.name,
          move1: pokemon.moves[0].move.name,
          move2: pokemon.moves[1].move.name,
          move3: pokemon.moves[2].move.name,
          hp: pokemon.stats[0].base_stat,
          attack: pokemon.stats[1].base_stat,
          defense: pokemon.stats[2].base_stat,
          special_attack: pokemon.stats[3].base_stat,
          special_defense: pokemon.stats[4].base_stat,
          speed: pokemon.stats[5].base_stat,
        });
      }
    });
  }, []);


  if (context.pokedexArray.includes(pokemonUrl)) {
    return (
      <PokeDetailPage>
        <Header>
          <ButtonDetails onClick={() => RoutePages.goBack(navigate)}>
            <span>Voltar</span>
          </ButtonDetails>
          <h1>{currentPoke.name}</h1>
          <ButtonRemove onClick={() => context.removePokemon(pokemonUrl)}>
            <span>Remover da sua Pokédex</span>
          </ButtonRemove>
        </Header>
        <Main>
            <DivPokeFront>
            <img src={currentPoke.front_img} alt = {`${currentPoke.name} de frente`}/>
            </DivPokeFront>
            
            <DivPokeBack>
            <img src={currentPoke.back_img} alt = {`${currentPoke.name} de costas`} />
            </DivPokeBack>
          <DivPokeStats>
            <h1>Status</h1>
            <p>HP: {currentPoke.hp}</p>
            <p>Attack: {currentPoke.attack}</p>
            <p>Defense: {currentPoke.defense}</p>
            <p>Special Attack: {currentPoke.special_attack}</p>
            <p>Special Defense: {currentPoke.special_defense}</p>
            <p>Speed: {currentPoke.speed}</p>
            <img src="https://i.gifer.com/4xjS.gif" alt ="Gif Pokébola"></img>
          </DivPokeStats>
          <DivPokeType>
          <h1>Type</h1>
            <p>{currentPoke.type1}</p>
            <p>{currentPoke.type2}</p>
            <img src="https://i.gifer.com/5dDj.gif" alt = "Gif Tipos dos Pokémons"></img> 
          </DivPokeType>
          <DivPokeMove>
          <h1>Moves</h1>
            <p>{currentPoke.move1}</p>
            <p>{currentPoke.move2}</p>
            <p>{currentPoke.move3}</p>
            <img src = "https://i.gifer.com/4bXB.gif" alt = "Gif Pikachu Preparando um Ataque"/>
          </DivPokeMove>
        </Main>
  
      </PokeDetailPage>
    );
  }

  return (
    <PokeDetailPage>
      <Header>
        <ButtonDetails onClick={() => RoutePages.goBack(navigate)}>
          <span>Voltar</span>
        </ButtonDetails>
        <h1>{currentPoke.name}</h1>
        <ButtonAdd onClick={() => context.addPokemon(pokemonUrl)}>
          <span>Adicionar a sua Pokédex</span>
        </ButtonAdd>
      </Header>
      <Main>
      <DivPokeFront>
            <img src={currentPoke.front_img} alt = {`${currentPoke.name} de frente`} />
            </DivPokeFront>
            
            <DivPokeBack>
            <img src={currentPoke.back_img} alt = {`${currentPoke.name} de costas`} />
            </DivPokeBack>
          <DivPokeStats>
            <h1>Status</h1>
            <p>HP: {currentPoke.hp}</p>
            <p>Attack: {currentPoke.attack}</p>
            <p>Defense: {currentPoke.defense}</p>
            <p>Special Attack: {currentPoke.special_attack}</p>
            <p>Special Defense: {currentPoke.special_defense}</p>
            <p>Speed: {currentPoke.speed}</p>
            <img src="https://i.gifer.com/4xjS.gif" alt ="Gif Pokébola"></img>
          </DivPokeStats>
        <DivPokeType>

            <h1>Type</h1>
            <p>{currentPoke.type1}</p>
            <p>{currentPoke.type2}</p>
            <img src="https://i.gifer.com/5dDj.gif" alt = "Gif Tipos dos Pokémons"></img> 
        </DivPokeType>
        <DivPokeMove>
        <h1>Moves</h1>
          <p>{currentPoke.move1}</p>
          <p>{currentPoke.move2}</p>
          <p>{currentPoke.move3}</p>
          <img src = "https://i.gifer.com/4bXB.gif" alt = "Gif Pikachu Preparando um Ataque"/>
        </DivPokeMove>
      </Main>
      </PokeDetailPage>
  );
}
