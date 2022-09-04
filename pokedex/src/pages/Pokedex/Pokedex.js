import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { PokemonCards } from '../../Components/PokemonCards/PokemonCards';
import { Footer } from '../Home/HomeStyle';
import { Header, Main, PokedexPage, Button } from './PokedexStyle';
import * as RoutePages from '../../router/Coodinator';
import {useNavigate} from 'react-router-dom';

export function Pokedex (){
    const navigate = useNavigate();
    return (
        <PokedexPage>
            <Header>
                <h1>Pokemon</h1>
                <Button onClick={() => RoutePages.goBack(navigate)}>Voltar para lista</Button>    
            </Header>
            <Main>
        
            </Main>
            <Footer>
            </Footer>
        </PokedexPage>
        )
}
