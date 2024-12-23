import React from 'react';
import About from './Components/About';
import Projects from './Components/Project';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
