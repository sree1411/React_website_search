 
import Card from '../components/Card'
import useFetch from '../hooks/useFetch'
import { UserData } from '../UserContext'

const ProductList = ({apiPath}) => {

 let {data} = useFetch(apiPath)  

 const {query} = UserData()

  const filterdItems = data.filter((pht) =>
      pht.title.toLowerCase().includes(query.toLowerCase())
    )

  return (
    <>
        <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", alignItems:"center", textAlign:"center"}}>
            {
                filterdItems.map((product)=>(
                       <Card key={product.id}  product={product}/>
                ))
            }
        </div>
    </>
  )
}

export default ProductList