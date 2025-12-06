import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Pages
import Home from './pages/Home';
import Concept from './pages/Concept';
import Menu from './pages/Menu';
import HeadSpa from './pages/HeadSpa';
import Esthe from './pages/Esthe';
import Info from './pages/Info';
import Holiday from './pages/Holiday';
import Access from './pages/Access';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/concept" element={<Concept />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/headspa" element={<HeadSpa />} />
          <Route path="/esthe" element={<Esthe />} />
          <Route path="/info" element={<Info />} />
          <Route path="/holiday" element={<Holiday />} />
          <Route path="/access" element={<Access />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
