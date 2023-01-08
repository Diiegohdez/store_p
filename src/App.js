import { useState } from 'react';
import './App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {Navbar} from './components/Navbar';
import {Products} from './components/Products';
import {useProducts} from './hooks/useProducts';

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  const {resultadoP, searchP, searchProduct} = useProducts();
  return (
    <>
      <Navbar 
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts} 
          resultadoP={resultadoP}
          searchP={searchP}
          searchProduct={searchProduct}/>

      <Products 
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}
          resultadoP={resultadoP}
          searchP={searchP}
          searchProduct={searchProduct}/>

      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
