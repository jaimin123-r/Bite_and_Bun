import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './components/Home';
import Menu from './components/Menu';
import MobileNav from './components/MobileNav';
import Search from './components/Search';
import MenuBar,{Settings,Myorder,Stores} from './components/MenuBar';
import About from './components/About';
import Contact from './components/Contact';
import Auth from './components/Auth';
import Profile from './components/Profile';
import Header from './components/Header';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <CartProvider>
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header /> <br /> <br /> <br /> <br />
        <AnimatePresence mode='wait'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/search" element={<Search />} />
            <Route path="/menubar" element={<MenuBar />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/stores" element={<Stores />} />
            <Route path="/setting" element={<Settings />} />
          </Routes>
        </AnimatePresence>
        <MobileNav />
        <Footer />
      </div>
    </Router>
    <ToastContainer position="top-left" autoClose={1000} />
    </CartProvider>
  );
}

export default App;