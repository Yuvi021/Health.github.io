import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
 import Navbar from './components/Navbar';
 import Home from './components/Home';
 import Howitworks from "./components/Howitworks";
 import Product from "./components/Product";
 import Ourteam from "./components/Ourteam";
 import Faq from "./components/Faq";
 import {BrowserRouter as Router,  Route, Routes} from 'react-router-dom';

const  App = () => {
  return (
   <>
    <Router>
    <Navbar />
    <Routes>
    <Route  path = "/" element ={<Home />} />
    <Route  path = "/Howitworks" element ={<Howitworks />} />
    <Route  path = "/product" element ={ <Product />} />
    <Route  path = "/ourteam" element ={<Ourteam />} />
    <Route  path = "/faq" element ={<Faq />} />
    </Routes>
    </Router>
    </> 
  );
}

export default App;
