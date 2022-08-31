import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { Footer } from '../Home/HomeStyle';
import { Header, Main, PokeDetailPage } from './Pokedexdetails';



export function Pokedetails (){

    return (
        <PokeDetailPage>
        <Header>
            <button>Voltar</button>
        <h1>Nome do Pokemon</h1>
        <button>Add/remove</button>    
        </Header>
        <Main>
        
        </Main>
        <Footer>
        </Footer>
        </PokeDetailPage>
        )
}
