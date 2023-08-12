// import React from 'react';
// import { Container, Navbar, NavbarBrand } from 'reactstrap';
// // import NucampLogo from './app/assets/img/logo.png';
// import CampsiteCard from './features/counter/campsites/CampsiteCard';
// import { CAMPSITES } from './app/shared/CAMPSITES';
// import CampsitesList from './features/counter/campsites/CampsitesList';
import Header from './components/Header';
import Footer from './components/Footer';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Header/>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='directory' element={<CampsitesDirectoryPage />}/>
          <Route path='directory/:campsiteId' element={<CampsiteDetailPage />}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
