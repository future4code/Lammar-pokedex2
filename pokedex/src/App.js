import './App.css';
import Rotas from './router/Router';
import { PokedexProvider } from './Context/PokedexProvider';



function App() {
  return (
    <PokedexProvider>
      <Rotas/>
    </PokedexProvider>
  );
}

export default App;
