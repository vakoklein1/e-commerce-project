import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import ShoppingCart from './pages/shoppingcart';
import Profile from './pages/profile';
import Header from './components/header';
import Counter from './components/counter';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/counter" element={<Counter />} /> {/* Add a route for the Counter */}
      </Routes>
    </Router>
  );
};

export default App;
