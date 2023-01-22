import React from 'react';
import Header from "./components/Header";
import "./styles/App.css";
import "./styles/Header.css";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="*" element={<div> Page not found </div>} />
    </Routes>



  </Router>
 
}

export default App;
