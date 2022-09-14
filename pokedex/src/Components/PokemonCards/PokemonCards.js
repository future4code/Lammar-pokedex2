import React, { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { PokemonCard, CardButtons, ButtonAdd, ButtonDetails, H1, ButtonRemove } from "./PokemonCardsStyle"
import { PokedexContext } from "../../Context/Context";



export function PokemonCards(props) {
  const navigate = useNavigate();
  const context = useContext(PokedexContext)
  const currentPage = useLocation();

  if(props.pokeButton){
    return (
      <PokemonCard>
        <H1>{props.pokeName}</H1>
        <img src={props.pokeImage} alt = {props.pokeName}></img>
  
        <CardButtons>
          <ButtonAdd onClick={() => {
            context.addPokemon(props.pokeUrl)
          }}>
            <span>
            Adicionar
            </span>
            </ButtonAdd>
          <ButtonDetails onClick={() => navigate(`pokemon/${props.pokeId}`)}>
            <span>

            Detalhes
            </span>
          </ButtonDetails>
        </CardButtons>
      </PokemonCard>
    );
  }

  return (
    <PokemonCard>
      
      <H1>{props.pokeName}</H1>
      <img src={props.pokeImage} alt = {props.pokeName}></img>

      <CardButtons>
        <ButtonRemove onClick={() => {
          context.removePokemon(props.pokeUrl)
        }}>
        <span>
          Remover
        </span>
        </ButtonRemove>
        <ButtonDetails onClick={
          () =>{
          if (currentPage.pathname === "/pokedex"){
            navigate(`../pokemon/${props.pokeId}`)
          } else {
            navigate(`pokemon/${props.pokeId}`)
          }
          }
          }>
          <span>
          Detalhes
          </span>
        </ButtonDetails>
      </CardButtons>
    </PokemonCard>
  );
}

