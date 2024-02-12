import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route from react-router-dom
import './app.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Sidebar from './components/sidebar/Sidebar';
import Subscribe from './components/pages/Subscribe/Subscribe';
import About from './components/pages/About/About';
import Contact from './components/pages/Contact/Contact';
import Documentation from './components/pages/Documentation/Documentation';
import SignUp from './components/pages/SignUp/SignUp';
import Terminale from './components/pages/Terminale/Terminale';

class App extends Component {
  render() {
    return (
      <div className='app_container'>
        <Header />
        <Sidebar />
        <div className='page_container'>
          <div className='pages'>
            <Routes> 
              <Route path="/subscribe" element={<Subscribe />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/documentation" element={<Documentation />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/terminale" element={<Terminale />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
