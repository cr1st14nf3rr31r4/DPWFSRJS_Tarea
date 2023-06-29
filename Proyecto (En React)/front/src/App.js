// import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import PortadaInicio from './components/PortadaInicio';
import SectionTitle from './components/SectionTitle';
import FotoBio from './components/Bio/FotoBio';
import TextoBio from './components/Bio/TextoBio';
import CallToAction from './components/Bio/CallToAction';

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main>
        <section className="inicio" id="inicio">
          <PortadaInicio />
        </section>

        <section className="bio" id="bio">
          <SectionTitle st="BIO" />
          
          <FotoBio />

          <TextoBio />
          
          <CallToAction GoTo="Contacto" />
        </section>

      </main>
    </div>
  );
}

export default App;
