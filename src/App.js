import './App.css';
import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
  	<>
  	<Header />
  		<Routes>
		    

			<Route path="/" element={<Home />} />
			<Route path="about" element={<About />} />
			<Route path="contact" element={<Contact />} />

		    
	    </Routes>
	    <Footer />
    </>
  );
}

export default App;
