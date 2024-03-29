import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import {fetchPokemon} from './services/DataServices.js';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Nav from 'react-bootstrap/Nav';
import logo from './assets/image 4.png';
import HeaderComponent from './components/Header/HeaderComponent.js';
import PokemonComponent from './components/PokemonCom/PokemonComponent';

function App() {

  const [pokemon, setPokemon] = useState(undefined);
  const [input, setInput] = useState("ditto");

  const getPokemon = async () => {
    const p = await fetchPokemon(input);
    setPokemon(p);
    console.log(pokemon);
  }

  const getInput = (i) => {
    console.log(input);
    getPokemon();
  }

  const rand = () => {
    setInput(Math.floor(Math.random() * 1025));
    getPokemon();
  }

  useEffect(() => {
    getPokemon();
  }, [])

  return (
    <div className='bg'>

      <Nav defaultActiveKey="/home" as="ul" className='navbar'>
        <Nav.Item>
          <img src={logo} alt='logo' className='img-fluid logo'></img>
        </Nav.Item>
        <Nav.Item>
          <InputGroup className="mb-3">
            <Button variant="dark" id="button-addon1" onClick={rand}>
              Random
            </Button>
            <Button variant="primary" id="button-addon1" onClick={getInput}>
              Search
            </Button>
            <Form.Control
              aria-label="Example text with button addon"
              aria-describedby="basic-addon1"
              onChange={(e => setInput(e.target.value))}
            />
          </InputGroup>
        </Nav.Item>
      </Nav>

      <HeaderComponent/>

      {  

      pokemon !== undefined ? <PokemonComponent pokeName={pokemon.name} pokeShiny={pokemon.sprites.front_shiny} pokeImg={pokemon.sprites.other["official-artwork"].front_default} types={pokemon.types} location={pokemon.location_area_encounters} abilities={pokemon.abilities} moves={pokemon.moves}></PokemonComponent> : <></> 
      
      }

    </div>
  );
}

export default App;
