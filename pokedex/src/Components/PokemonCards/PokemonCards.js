import React from "react"
import axios from 'axios';
import { useState } from "react";

import { PokemonCard, CardButtons, ButtonAdd, ButtonDetails, H1 } from "./PokemonCardsStyle"


export function PokemonCards (props){
    
    
return(

<PokemonCard>
    
        
        <H1>{props.pokeName}</H1>
        <img src={props.pokeImage}></img>

    <CardButtons>
<ButtonAdd>
    Adicionar
</ButtonAdd>
<ButtonDetails>
    detalhes
</ButtonDetails>
    </CardButtons>
   
</PokemonCard>
)
}

