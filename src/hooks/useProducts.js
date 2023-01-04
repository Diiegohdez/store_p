import {useEffect, useState} from 'react';
import { Api } from '../api/Api';

export const useProducts = () => {
    //informacion de la api
    const [product, setProduct] = useState([]);

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



  return {
    product
  }
}
