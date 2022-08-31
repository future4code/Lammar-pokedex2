import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { PokemonCards } from '../../Components/PokemonCards/PokemonCards';
import { Footer, Header, HomePage, Main } from './HomeStyle';



export function Home (){
    return (
    <HomePage>
    <Header>
    <h1>Pokemon</h1>
    <button>Ir para pokedex</button>    
    </Header>
    <Main>
    <PokemonCards/>
    </Main>
    <Footer>
    </Footer>
    </HomePage>
    
    
    )
}
