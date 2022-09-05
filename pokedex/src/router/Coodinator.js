
export const goPokedex = (navigate) => {
    navigate('/pokedex')
}

export const goPokemonDetail = (navigate) => {
    navigate('/pokemon/:id')
}

export const goBack = (navigate) => {
    navigate(-1)
}
