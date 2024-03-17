import { fetchData , addFav } from '../../services/DataServices.js';
import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './style.css'
import bug from "../../assets/Bug.png";
import dark from "../../assets/Dark.png";
import dragon from "../../assets/Dragon.png";
import electric from "../../assets/Electric.png";
import fairy from "../../assets/Fairy.png";
import fighting from "../../assets/Fighting.png";
import flying from "../../assets/Flying.png";
import ghost from "../../assets/Ghost.png";
import fire from "../../assets/Fire.png";
import grass from "../../assets/Grass.png";
import ice from "../../assets/Ice.png";
import normal from "../../assets/Normal.png";
import poison from "../../assets/Poison.png";
import psychic from "../../assets/Psychic.png";
import rock from "../../assets/Rock.png";
import steel from "../../assets/Steel.png";
import ground from "../../assets/Ground.png";


const PokemonComponent = (props) => {

  const [location, setLocation] = useState('');

  const getLocation = async () => {
    const d = await fetchData(props.location);
    setLocation(d);
    console.log(location);
  }

  const makeFav = () => {
    addFav(props.pokeName);
  }
  
  useEffect(() => {
    getLocation();
  }, [props.pokeName])

  const getImages = (t) => {
    switch(t){
      case "normal": return normal;
      case "bug": return bug;
      case "dark": return dark;
      case "dragon": return dragon;
      case "electric": return electric;
      case "fairy": return fairy;
      case "fighting": return fighting;
      case "flying": return flying;
      case "ghost": return ghost;
      case "fire": return fire;
      case "grass": return grass;
      case "ice": return ice;
      case "poison": return poison;
      case "psychic": return psychic;
      case "rock": return rock;
      case "steel": return steel;
      case "ground": return ground;
    }
  }

  return (
    <div>
      
      <Container>
        <Row>
          <Col lg={6} md={12}>
          <div className='flex'>
            <h1>{props.pokeName}</h1>
            <Button variant="light" onClick={makeFav}>♡</Button>
          </div>
            <img alt="Shiny Pokemon img" src={props.pokeShiny} className='small-img-size img-fluid'></img>
            <img alt="Default Pokemon img" src={props.pokeImg} className='img-fluid'></img>
          </Col>
          <Col className='info-section' lg={6} md={12}>
            <h1>Types</h1>
            <div>
              {
                props.types.map(t => {
                  return(
                    <img src={getImages(t.type.name)} alt="Typing" key={t.slot}></img>
                  );
                })
              }
            </div>
            <h1>Location</h1>
            <p>{location[0] != null ? location[0].location_area.name : "N/A"}</p>
            <h1>Abilities</h1>
            {
              props.abilities.map(a => {
                return(<p key={a.slot}>{a.ability.name}</p>);
              })
            }
          </Col>
          <Col lg={12} className='info-section'>
            <h1>Evo Line</h1>

            <h1>Moves</h1>
            {
              props.moves.map(m => {
                return(<p key={m.move.name}>{m.move.name}</p>);
              })
            }

          </Col>
        </Row>
      </Container>
      
    </div>
  )
}

export default PokemonComponent