import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home/Home'
import { Pokedetails } from '../pages/PokedexDetail/Pokedetails'
import { Pokedex } from '../pages/Pokedex/Pokedex'

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element = {<Home/>}/>
                <Route path='/pokemon/:id' element = {<Pokedetails/>}/>
                <Route path='/pokedex' element = {<Pokedex/>}/>
            </Routes>
        </BrowserRouter>
    )

}
export default Rotas