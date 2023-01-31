import { useContext, useEffect, useState } from "react";
import cesto from "../../assets/images/cesto.png";
import Bar from "../Bar/Bar";
import { Advertising, Basket } from "./StyleAdvertising";
import { advertisingGet, card } from "../../services/useGetInfos"; 
import UserContext from "../../contexts/UserContext";
import { shopName } from "../../services/api";
import { Link, useNavigate } from "react-router-dom";

export default function Adverti() {  
  const { setValue, userData } = useContext(UserContext);
  const [product, setProduct] = useState();
  
  useEffect(() => { 
    const value = setValue();
    card(value?.token)
      .then((i) => {
        advertisingGet()
          .then((value) => setProduct({ ...product, list: i, advertising: value }))
          .catch((erro) => console.error(erro));
      })
      .catch((i) => console.log(i));
  }, []);
  const navigat = useNavigate();
  return(
    <>
      <Advertising>
        <Basket onClick={ () => navigat(shopName+"/user") } >
          <div>{ product?.list.length ? product?.list.length : 0   }</div>
          <img src={cesto}/>
        </Basket>
        { product?.advertising.length > 0 ? product.advertising.map((value) => {
          return(
            <span>
              <h1>{value.text}
                <h2>
                  {value.Product.description}
                </h2>
                <Link to={shopName+"/product/"+value.productId}>
                  <Bar>Saiba mais</Bar>  
                </Link>
              </h1>
              <div>
                <img src={value.Product.UrlImage[0].urlImage}/>     
              </div>
            </span>);
        }) : 
          <span>
            <h1>
              Coloque sua propaganda aqui !!
            </h1>
          </span>
        }
      </Advertising>
    </>
  );
};
