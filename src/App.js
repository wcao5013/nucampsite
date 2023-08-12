// import React from 'react';
// import { Container, Navbar, NavbarBrand } from 'reactstrap';
// // import NucampLogo from './app/assets/img/logo.png';
// import CampsiteCard from './features/counter/campsites/CampsiteCard';
import Header from './components/Header';
import Footer from './components/Footer';
// import CampsitesList from './features/counter/campsites/CampsitesList';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import { CAMPSITES } from './app/shared/CAMPSITES';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Header/>
      <CampsitesDirectoryPage/>
      <Footer/>
    </div>
  );
}

export default App;
