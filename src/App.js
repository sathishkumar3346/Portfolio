import React from 'react';
import Header from './component/Header';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Projects from './component/Project';
import './App.css';
import Skills from './component/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Projects />
      <Skills/>
      <Contact />
    </div>
  );
}

export default App;
