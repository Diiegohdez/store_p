//import { useProducts } from "../hooks/useProducts";
import React from 'react';
import './products.css';

export const Products = ({
    allProducts,
	setAllProducts,
	countProducts,
	setCountProducts,
	total,
	setTotal,
    resultadoP,}) => {

    //const {product} = useProducts();
    

    const onAddProduct = item => {
        if (allProducts.find(productos => productos.id === item.id)) {
            const produc = allProducts.map(productos =>
                productos.id === item.id
                    ? {...productos, quantity: productos.quantity + 1 }
                    : productos
                );
                setTotal(total + item.price * item.quantity);
                setCountProducts(countProducts + item.quantity);
                return setAllProducts([...produc]);
        }

        setTotal(total + item.price * item.quantity);
        setCountProducts(countProducts + item.quantity);
        setAllProducts([...allProducts, item]);
    };
  return (
    <div className="container-product">
        <h1 className='producTitle'>Nuestro Productos !</h1>
        <div className="container-items">
            {resultadoP.map(item=>(
            <div className="item" key={item.id}>
                <figure>
                    <img src={item.img} alt={item.name} width="100%"/>
                </figure>
                <h1>{item.name}</h1>
                <p>$ {item.price}</p>
                <div >
                    <button className="btn-product" onClick={()=> onAddProduct(item)}>
                        Agregar Producto
                        </button>
                </div>
            </div>
        ))}
        </div>
    </div>
  )
}

