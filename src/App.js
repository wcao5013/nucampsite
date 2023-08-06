import React from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import NucampLogo from './app/assets/img/logo.png';
// import CampsiteCard from './features/counter/campsites/CampsiteCard';
import CampsitesList from './features/counter/campsites/CampsitesList';
import { CAMPSITES } from './app/shared/CAMPSITES';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar dark color='primary' sticky='top' expand='md'>
        <Container>
          <NavbarBrand href='/'>
            <img src={NucampLogo} alt='nucamp logo' />
          </NavbarBrand>
        </Container>
      </Navbar>
      <CampsitesList campsite={CAMPSITES[0]} />
    </div>
  );
}

export default App;
