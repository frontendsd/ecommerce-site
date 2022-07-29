import './App.css'
import Home from './components/Home';
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Contact from './components/Contact'
import Product from './components/Product'


import {Routes, Route} from 'react-router-dom'
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="/product" element={ <Product />}/>
        <Route path="/products/:id" element={ <ProductDetail />}/>
        <Route path="/Cart" element={ <Cart/>}/>
        <Route path="/checkout" element={ <Checkout/>}/>
        <Route path="/about" element={ <About />}/>
        <Route path="/contact" element={ <Contact />}/>
        {/* <Route to="*" element={ <NotFound />}/> */}
      </Routes>
      {/* <Home /> */}
      <Footer/> 
    </>
  );
}

export default App;
