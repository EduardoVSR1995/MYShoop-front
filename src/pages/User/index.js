import Top from "../../components/Top/Top";
import { TopProduct } from "../../components/SalesArea/StyleSalesArea";
import Sales from "../../components/SalesArea/Sales";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";
import { cart } from "../../services/useGetInfos";

export default function User() {
  const [ product, setProduct ] = useState();
  const { setValue } = useContext(UserContext);

  useEffect(() => {
    const { token } = setValue();
    load(token);  
  }, []);
  function load(token) {
    const select = cart(token)
      .then((value) => { 
        setProduct([ ...value ]); 
      })
      .catch((i) => console.error(i));
  }
  return(
    <>
      <TopProduct>
        <Top />
      </TopProduct>
      {  
        product ? product.map((i, index) => { return <Sales key={index} type={i.ProductId} load={load} />;}) 
          : 
          "Você ainda não colocou nada no carrinho!"
      }
    </>
  );
};
