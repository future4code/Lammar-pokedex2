import axios from 'axios';
import React, { useEffect, useState }  from 'react';
import {useNavigate} from 'react-router-dom'
import { PokemonCards } from '../../Components/PokemonCards/PokemonCards';
import * as RoutePages from '../../router/Coodinator'
import { Button, Footer, Header, HomePage, Main } from './HomeStyle';



export function Home (){
    const navigate = useNavigate();
    const [pokeList, setpokeList] = useState([])
    const [pokeFront, setpokeFront] = useState(undefined)
    
    const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
    const limit = 20;
    const page = 0;
    const offset = page * 0;

    function callbackfn (pokemon) {
        return {name: pokemon.name, url: pokemon.url}
    }

    useEffect(() => {
        axios.get(`${BASE_URL}`).then((response) => {
            setpokeList(response.data.results.map(callbackfn).map((pokemon, index) => {
                return {name: pokemon.name, img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`}
            }))
            console.log(pokeList)            
        })
        
    }
    ,[])

    const pokeDisplay = pokeList.map((pokemon) => {return <PokemonCards pokeName = {pokemon.name} pokeImage = {pokemon.img} ></PokemonCards>})


    return (
    <HomePage>
        <Header>
            <h1>Pokemon</h1>
            <Button onClick={() => RoutePages.goPokedex(navigate)}>Ir para pokedex</Button>
        </Header>
        <Main>
            {pokeDisplay}
        </Main>
        <Footer>
        </Footer>
    </HomePage>
    
    
    )
}
