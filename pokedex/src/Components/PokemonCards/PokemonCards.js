import axios from 'axios';
import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PokemonCard, CardButtons, ButtonAdd, ButtonDetails, H1, ButtonRemove } from "./PokemonCardsStyle"
import { PokedexContext } from "../../Context/Context";



export function PokemonCards(props) {
  const navigate = useNavigate();
  const context = useContext(PokedexContext)

  if(props.pokeButton){
    return (
      <PokemonCard>
        <H1>{props.pokeName}</H1>
        <img src={props.pokeImage}></img>
  
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
      <img src={props.pokeImage}></img>

      <CardButtons>
        <ButtonRemove onClick={() => {
          context.removePokemon(props.pokeUrl)
        }}>
        <span>
          Remover
        </span>
        </ButtonRemove>
        <ButtonDetails onClick={() => navigate(`pokemon/${props.pokeId}`)}>
          <span>

          Detalhes
          </span>
        </ButtonDetails>
      </CardButtons>
    </PokemonCard>
  );
}

