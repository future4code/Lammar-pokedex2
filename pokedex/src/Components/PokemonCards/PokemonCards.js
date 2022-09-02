import React from "react"
import axios from 'axios';
import { useState } from "react";

import { PokemonCard, CardButtons, ButtonAdd, ButtonDetails } from "./PokemonCardsStyle"


export function PokemonCards (props){
    
    
return(

<PokemonCard>
    <div>
        
        <h1>{props.pokeName}</h1>
        <img src={props.pokeImage}></img>

    <CardButtons>
<ButtonAdd>
    Adicionar
</ButtonAdd>
<ButtonDetails>
    detalhes
</ButtonDetails>
    </CardButtons>
    </div>
</PokemonCard>
)
}

