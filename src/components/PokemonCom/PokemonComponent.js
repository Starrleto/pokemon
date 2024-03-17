import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './style.css'


const PokemonComponent = (props) => {

  const getTypeImage = () => {
    
  }

  return (
    <div>
      
      <Container>
        <Row>
          <Col>
          <div className='flex'>
            <h1>{props.pokeName}</h1>
            <Button variant="primary">Primary</Button>
          </div>
            <img alt="Shiny Pokemon img" src={props.pokeShiny} className='small-img-size img-fluid'></img>
            <img alt="Default Pokemon img" src={props.pokeImg} className='img-fluid'></img>
          </Col>
          <Col className='info-section'>
            <h1></h1>
          </Col>
        </Row>
      </Container>
      
    </div>
  )
}

export default PokemonComponent