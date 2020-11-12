import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form'

import {Button, Card} from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

function App() {
  return (
    <div className="App">
      
      <Container>
  <Row>
    <Col> 
    <div className='Nav-bar'> 
    <h1>TenteZ Votre Chance Et Gangez Le Tout Dernier Iphone 12 Pro </h1>

      </div></Col>
  </Row>
  <Row>
    <Col>
    <div className='img'>
      <img src="iphone-12.png" alt="iphone" width='300px'/>
      </div></Col>
  </Row>
  <Row>
    <Col>
    <div className="formulaire">
    <Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="Rue 14 Janvier" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Sousse</option>
        <option>Monastir</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>

  
<div className='bouton-form'>
<Button  variant="primary" type="submit">
    Submit
  </Button>
</div>
  
</Form>
    </div>
    
    </Col>
  </Row>
</Container>
        
        
     
     
    </div>
  );
}

export default App;
