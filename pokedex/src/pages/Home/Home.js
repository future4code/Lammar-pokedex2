import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { PokemonCards } from '../../Components/PokemonCards/PokemonCards';

import { Footer, Header, HomePage, Main } from './HomeStyle';



export function Home (){
    const [pokemon, setPokemon] = useState(undefined)
    const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
    const array = [1,2]
    const pokeList = array.forEach(callbackfn)
    function callbackfn (num) {
        axios.get(`${BASE_URL}${num}`).then((response) =>{
            setPokemon(response.data) 
        }).catch((error) =>{
            console.log(error.message)
        })
        const pokemonImage = pokemon && pokemon.sprites.front_default
        const pokemonName = pokemon && pokemon.name
        return <PokemonCards pokeImage = {pokemonImage} pokeName = {pokemonName}/>

    }



    return (
    <HomePage>
    <Header>
    <h1>Pokemon</h1>
    <button>Ir para pokedex</button>    
    </Header>
    <Main>
    {pokeList}
    </Main>
    <Footer>
    </Footer>
    </HomePage>
    
    
    )
}
