import { PokedexContext } from "./Context";
import {useState} from 'react';


export const PokedexProvider = (props) => { 
    // const [addPokemon, setAddPokemon] = useState([])
    
    // const addToPokedex = (pokemon) => {
    //     const newPokemon = [...addPokemon]
    //     // console.log(pokemon)

    //     const pokemonIndex = newPokemon.findIndex((p) => p === pokemon)

    //     if (pokemonIndex === -1) {
    //         newPokemon.push(pokemon)
    //         console.log(`pokemon adicionado.`)
    //         setAddPokemon(newPokemon)
            
    //     } else {
    //         console.log(`pokemon já foi adicionado à pokedex.`)
    //     }

    //     }

    

    // const removePokemon = (pokemon) => {
    //     const newPokemon = [...addPokemon]

    //     const pokemonIndex = addPokemon.findIndex((p) => p === pokemon)

    //     if (newPokemon[pokemonIndex].quantity === 1) {
    //         newPokemon.splice(pokemonIndex, 1)
    //         setAddPokemon(newPokemon)
    //     } else {
    //         addToPokedex()
    //     }
    // }

    const [pokedexArray, setPokedexArray] = useState([])

    function addPokemon (pokemonUrl) {
        const newPokedexArray = [...pokedexArray]
        newPokedexArray.push(pokemonUrl)
        setPokedexArray(newPokedexArray)
    }

    function removePokemon (pokemonUrl) {
        const newPokedexArray = [...pokedexArray]
        const pokeIndex = newPokedexArray.findIndex((pokemon) => pokemon === pokemonUrl)
        newPokedexArray.splice(pokeIndex, 1);
        setPokedexArray(newPokedexArray)
    }



    
    return (
        <PokedexContext.Provider value={{addPokemon, pokedexArray, removePokemon /*addToPokedex, removePokemon, addPokemon*/}}>
            {props.children}
        </PokedexContext.Provider>
    )

}