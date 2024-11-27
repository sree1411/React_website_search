import { useEffect,useState } from "react";

const useFetch = (apipath) => {
    const [data, setData] = useState([]);
  
    // Dynamically encode the API path
    const dataUrl = `https://fakestoreapi.com/${apipath}`;
  
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await fetch(dataUrl);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const result = await response.json();
          setData(result);
        } catch (error) {
          console.error("Failed to fetch data:", error);
        }
      };
      fetchProducts();
    }, [dataUrl]);
  
    return { data };
  };
  
  export default useFetch;
  