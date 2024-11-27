import React from 'react'
import useFetch from '../hooks/useFetch'

const ProductCategory = ({apiPath}) => {

  const {data} = useFetch(apiPath)
   
  console.log(data)

  return (
    <div>
        ProductCategory: 
        <ul>
        {
            data.map((x)=>(
                <div>
                    {x}
                </div>
            ))
         }
        </ul> 
         
    </div>
  )
}

export default ProductCategory