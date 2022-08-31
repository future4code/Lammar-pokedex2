import React from "react"

import { PokemonCard, CardButtons, ButtonAdd, ButtonDetails } from "./PokemonCardsStyle"


export function PokemonCards (){
return(

<PokemonCard>
    <div>
        <img src="http://midia.gruposinos.com.br/_midias/jpg/2016/07/13/pikachu-1590127.jpg"></img>
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

