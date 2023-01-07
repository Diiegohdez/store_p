import {useState} from 'react'
import './navbar.css'
import { FaCartPlus, FaSearch, FaWindowClose } from 'react-icons/fa';


 export const Navbar = ({
    allProducts,
    setAllProducts,
    total,
    setTotal,
    countProducts,
    setCountProducts }) => {

      const [active, setActive] = useState(false);

      const onDeleteProduct = item => {
        const result = allProducts.filter(
          productos => productos.id !== item.id
        );

        setTotal(total - item.price * item.quantity);
        setCountProducts(countProducts - item.quantity);
        setAllProducts(result);
      };

      const onCleanCart = () =>{
        setAllProducts([]);
        setTotal(0);
        setCountProducts(0);
      };
  
  return (
    <div className='nav'>
      <img src='https://i.ibb.co/dpYvgRq/BackPack.png' alt='logo' className='navbar-logo'/>
        <div className='container-search'>
        <input type='text'  placeholder='Buscar Producto' className='search'/>
        <FaSearch className='ico-search'/>
      </div>
      <div className='container-ico'>
        <div className='container-ico-cart' onClick={()=> setActive(!active)}>
          <FaCartPlus className='ico-cart'/>
          <div className='count-product'>
            <span id='contador-products'>{countProducts}</span>
             </div>
          </div>
          <div className={`container-cart-products ${active ? '' : 'hidden-cart'}`}>
            {allProducts.length ? (
              <>
                <div className='row-products'>
                  {allProducts.map(item =>(
                    <div className='cart-product' key={item.id}>
                      <div className='info-cart-product'>
                        <span className='cat-product-cart'>
                          {item.quantity}
                        </span>
                        <p className='title-product-cart'>
                            {item.name}
                          </p>
                          <span className='price-prduct-cart'>
                            ${item.price}
                          </span>
                      </div>
                      <FaWindowClose onClick={()=> onDeleteProduct(item)} className='ico-close'/>
                    </div>
                  ))}
                </div>
                <div className='cart_total'>
                  <h3>Total:</h3>
                  <span className='total-pagar'>$ {total}</span>
                </div>
                <button className='btn-clear-all' onClick={onCleanCart}>
                  Vaciar Carrito
                </button>
              </>
            ):(
              <p className='cart-empty'>El carrito esta Vacio</p>
            )}
          
        </div>
        
      </div>
    
    </div>
  );
};

