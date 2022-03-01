import React, {useState,useEffect} from 'react'
import { useParams } from "react-router-dom"

export default function Product() {
  
    const {id} = useParams();
    const [product, setProduct] = useState ([]);
    const [loading, setLoading] = useState (false);

    useEffect(()=>{

        const getProduct = async () =>{
        setLoading(true)
        const responce = await fetch(`https://fakestoreapi.com/products/${id}`);
        setProduct(await responce.json());
        setLoading(false);

    }
        getProduct();
    },[])

    const Loading = () =>{
        return(
            <>
                Loading ... 
            </>
        )
    } 
    const ShowProduct = () =>{
        return(
        <>
        
        </>
        )
    }



    return (
    <div  className='container'>
        <div className='row'>
            {loading ? <Loading/> : <ShowProduct />}

        </div>

    </div>
  )
}
