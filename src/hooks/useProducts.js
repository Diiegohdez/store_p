import {useEffect, useState} from 'react';
import { Api } from '../api/Api';

export const useProducts = () => {
    //informacion de la api
    const [product, setProduct] = useState([]);

    const [searchProduct, setSearchProduct] = useState("");

    useEffect(()=>{
        getProducts();
    },[])

    //pedir informacion de api
    const getProducts = async () =>{
        await Api.get('https://apiproducto-b55e2-default-rtdb.firebaseio.com/Productos.json')
        .then(Response=>{
            setProduct(Response.data);
        }).catch(error=>{
            console.log(error);
        })
    }

    /*Filtra Informacion*/
    const searchP = (e) =>{
        setSearchProduct(e.target.value)
    }
    let resultadoP = []
    if(!searchProduct)
        {
            resultadoP = product
        }else{
            resultadoP = product.filter((dato)=>
            dato.name.toLowerCase().includes(searchProduct.toLocaleLowerCase())
            || dato.price.toLowerCase().includes(searchProduct.toLocaleLowerCase())
            )
        }



  return {
    product,
    searchP,
    resultadoP,
    searchProduct
  }
}
