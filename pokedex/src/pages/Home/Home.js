import axios from 'axios';
import React, { useEffect, useState }  from 'react';
import {useNavigate} from 'react-router-dom'
import { PokemonCards } from '../../Components/PokemonCards/PokemonCards';
import * as RoutePages from '../../router/Coodinator'
import { Button, Footer, Header, HomePage, Main } from './HomeStyle';
import {BASE_URL} from '../../constants/constants'


export function Home (){
    const navigate = useNavigate();
    const [pokeFront, setpokeFront] = useState([])
    
    const limit = 20;
    const page = 0;
    const offset = page * 0;


    useEffect(() => {
        axios.get(`${BASE_URL}`).then((response) => {
            const pokeArray = []
            response.data.results.map((pokemon) => {return {name: pokemon.name, url: pokemon.url}}).map((pokemon, index) => {
                axios.get(pokemon.url).then((response) => {
                    pokeArray.push({name: response.data.name, img: response.data.sprites.front_default, key: (index)})
                    setpokeFront([...pokeArray])
                })
            })                
        })
    }
    ,[page])


    return (
    <HomePage>
        <Header>
            <h1>Pokemon</h1>
            <Button onClick={() => RoutePages.goPokedex(navigate)}>Ir para pokedex</Button>
        </Header>
        <Main>
            {pokeFront.map((pokemon) => {return <PokemonCards pokeName = {pokemon.name} pokeImage = {pokemon.img} key= {pokemon.key} ></PokemonCards>})}
        </Main>
        <Footer>
        </Footer>
    </HomePage>
    
    
    )
}
