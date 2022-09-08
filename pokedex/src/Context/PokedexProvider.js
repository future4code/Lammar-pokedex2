import { PokedexContext } from "./Context";
import {useState} from 'react';


export const PokedexProvider = (props) => { 
    const [addPokemon, setAddPokemon] = useState([])
    
    const addToPokedex = (pokemon) => {
        const newPokemon = [...addPokemon]

        const pokemonIndex = addPokemon.findIndex((p) => p.id === pokemon.id)

        if (pokemonIndex === -1) {
            
            newPokemon.push({...pokemon, quantity: 1})
            console.log(`pokemon adicionado.`)

        } else {
            
            
            console.log(`pokemon já foi adicionado à pokedex.`)
        }
        setAddPokemon(newPokemon)

        }

    

    const removePokemon = (pokemon) => {
        const newPokemon = [...addPokemon]

        const pokemonIndex = addPokemon.findIndex((p) => p.id === pokemon.id)

        if (newPokemon[pokemonIndex].quantity === 1) {
            newPokemon.splice(pokemonIndex, 1)
            
        } else {
            addToPokedex()
        }
    }
    
    return (
        <PokedexContext.Provider value={{addToPokedex, removePokemon, addPokemon}}>
            {props.children}
        </PokedexContext.Provider>
    )

}