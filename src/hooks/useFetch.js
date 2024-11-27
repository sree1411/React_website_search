import { useEffect, useState } from "react";

 

const useFetch = (apipath) => {

    const [data, setData] = useState([]);

    const dataUrl = `https://fakestoreapi.com/${apipath}`
    console.log(dataUrl)

    useEffect(()=>{
        const fetchProducts =async ()=>{
           const response = await fetch(dataUrl);
           const result = await response.json()
           setData(result)
        }
        fetchProducts();
      }, [dataUrl])


  return {data}
}

export default useFetch