import React from 'react';
import About from './Components/About';
import Projects from './Components/Project';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import './App.css';
import Experience from './Components/Experience';

function App() {
  return (
    <div className="App">
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;

