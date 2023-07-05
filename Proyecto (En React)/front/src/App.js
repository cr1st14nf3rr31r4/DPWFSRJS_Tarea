// import './App.css';
import React from 'react';
import Navbar from './components/Inicio/Navbar';
import PortadaInicio from './components/Inicio/PortadaInicio';
import SectionTitle from './components/SectionTitle';
import FotoBio from './components/Bio/FotoBio';
import TextoBio from './components/Bio/TextoBio';
import CallToAction from './components/Bio/CallToAction';
import VGallery from './components/Videos/VGallery';
import Discografia from './components/Discos/Discografia';
import Carrusel from './components/Galeria/Carrusel';
import CanalesAlternativos from './components/Contacto/CanalesAlternativos';
import FormularioContacto from './components/Contacto/FormularioContacto';
import Agenda from './components/Conciertos/Agenda';
import FooterTexto from './components/Footer/FooterTexto';
import FooterToTop from './components/Footer/FooterToTop';

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

          <CallToAction />
        </section>

        <section className="videos" id="videos">
          <SectionTitle st="VIDEOS" />

          <VGallery />
        </section>

        <section className="discos" id="discos">
          <SectionTitle st="DISCOS" />

          <Discografia />
        </section>

        <section className="conciertos" id="conciertos">
          <SectionTitle st="CONCIERTOS" />

          <Agenda />
        </section>

        <section className="galeria" id="galeria">
          <SectionTitle st="GALERIA" />

          <Carrusel />
        </section>

        <section className="contacto" id="contacto">
          <SectionTitle st="CONTACTO" />

          <CanalesAlternativos />

          <FormularioContacto />
        </section>
      </main>

      <footer className="footer">
        <FooterTexto />

        <FooterToTop />
      </footer>
    </div>
  );
}

export default App;
