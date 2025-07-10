import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Project';
import Contact from './components/Contact';
import './index.css';
import './style/navbar.css';
import './style/home.css';
import './style/about.css';
import './style/project.css';
import './style/contact.css';
import Skills from './components/Skills';

function App() {
  return (
    <div>
      <Navbar />
      <section id="home" className="section">
        <Home />
      </section>
      <section id="about" className="section">
        <About />
      </section>
      <section id="projects" className="section">
        <Projects/>
      </section>
      <section id="skills" className="section">
       <Skills/>
      </section>
      <section id="contact" className="section">
       < Contact />
      </section>
    </div>
  );
}

export default App;
