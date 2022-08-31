import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { PokemonCards } from '../../Components/PokemonCards/PokemonCards';
import { Footer } from '../Home/HomeStyle';
import { Header, Main, PokedexPage } from './PokedexStyle';



export function Pokedex (){

    return (
        <PokedexPage>
        <Header>
        <h1>Pokemon</h1>
        <button>Voltar para lista</button>    
        </Header>
        <Main>
        
        </Main>
        <Footer>
        </Footer>
        </PokedexPage>
        )
}
