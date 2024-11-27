 
import useFetch from '../hooks/useFetch'
import { NavLink } from 'react-router-dom';
import { UserData } from '../UserContext';

const ProductCategory = ({apiPath}) => {

  const {data} = useFetch(apiPath);

  const {query} = UserData()

  const filterdItems = data.filter((pht) =>
      pht.includes(query.toLowerCase())
    )

  return (
    <div>
        ProductCategory: 
        <ul>
         

{
         filterdItems.map((product)=>(
                <div>
                 <NavLink to={`${product}`}> {product}   </NavLink>   
                </div>
            ))
         }
        </ul> 
         
    </div>
  )
}

export default ProductCategory