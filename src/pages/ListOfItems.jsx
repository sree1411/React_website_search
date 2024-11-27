
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Card from "../components/Card";
import { UserData } from "../UserContext";

const ListOfItems = () => {
  const { category } = useParams();
  const apiPath = `products/category/${category}`;
  const { data } = useFetch(apiPath);

  const {query} = UserData()

  const filterdItems = data.filter((pht) =>
      pht.title.toLowerCase().includes(query.toLowerCase())
    )

  return (
    <div>
      {filterdItems.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ListOfItems;
