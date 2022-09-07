import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import { Footer } from '../Home/HomeStyle';
import { Header, Main, PokeDetailPage } from './Pokedexdetails';
import {BASE_URL} from '../../constants/constants'
import * as RoutePages from '../../router/Coodinator';
import {useNavigate} from 'react-router-dom';

export function Pokedetails (){
    const pathParams = useParams();
    const [currentPoke, setCurrentPoke] = useState({})
    const navigate = useNavigate();
    
    useEffect(() => {
      axios.get(`${BASE_URL}${pathParams.id}`).then((response) => {
        const pokemon = response.data;
        if (pokemon.types.length <= 1) {
          setCurrentPoke({
            name: pokemon.name,
            front_img: pokemon.sprites.front_default,
            back_img: pokemon.sprites.back_default,
            type1: pokemon.types[0].type.name,
            move1: pokemon.moves[0].move.name,
            move2: pokemon.moves[1].move.name,
            move3: pokemon.moves[2].move.name,
            hp: pokemon.stats[0].base_stat,
            attack: pokemon.stats[1].base_stat,
            defense: pokemon.stats[2].base_stat,
            special_attack: pokemon.stats[3].base_stat,
            special_defense: pokemon.stats[4].base_stat,
            speed: pokemon.stats[5].base_stat
          })}
          else {
            setCurrentPoke(
              {
                name: pokemon.name,
                front_img: pokemon.sprites.front_default,
                back_img: pokemon.sprites.back_default,
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
                speed: pokemon.stats[5].base_stat
              }
            )

          }
          ;

      });
    }, []);
    
    return (
        <PokeDetailPage>
        <Header>
            <button onClick={() => RoutePages.goBack(navigate)}>Voltar</button>
            <h1>Nome do Pokemon</h1>
            <button>Add/remove</button>    
        </Header>
        <Main>
            <h1>{currentPoke.name}</h1>
            <img src={currentPoke.front_img}/>
            <img src = {currentPoke.back_img}/>
            <p>{currentPoke.type1}</p>
            <p>{currentPoke.type2}</p>
            <p>{currentPoke.move1}</p>
            <p>{currentPoke.move2}</p>
            <p>{currentPoke.move3}</p>
            <p>HP: {currentPoke.hp}</p>
            <p>Attack: {currentPoke.attack}</p>
            <p>Defense: {currentPoke.defense}</p>
            <p>Special Attack: {currentPoke.special_attack}</p>
            <p>Special Defense: {currentPoke.special_defense}</p>
            <p>Speed: {currentPoke.speed}</p>
        </Main>
        <Footer>
        </Footer>
        </PokeDetailPage>
        )
}
