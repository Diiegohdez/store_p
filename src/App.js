import { useState } from 'react';
import './App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {Navbar} from './components/Navbar';
import {Products} from './components/Products';

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  return (
    <>
      <Navbar 
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts} />

      <Products 
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}/>

      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
