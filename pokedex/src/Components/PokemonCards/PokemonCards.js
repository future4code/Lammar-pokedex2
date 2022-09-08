import React from "react"
import axios from 'axios';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PokemonCard, CardButtons, ButtonAdd, ButtonDetails, H1 } from "./PokemonCardsStyle"



export function PokemonCards (props){
    const navigate = useNavigate()
    
    
return(

<PokemonCard>
    
        
        <H1>{props.pokeName}</H1>
        <img src={props.pokeImage}></img>

    <CardButtons>
<ButtonAdd>
    Adicionar
</ButtonAdd>
<ButtonDetails onClick={() => navigate(`pokemon/${props.pokeId}`)}>
    Detalhes
</ButtonDetails>
    </CardButtons>
</PokemonCard>
)
}

