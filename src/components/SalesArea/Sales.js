import { Input } from "../Forms/StyleForms";
import { Box, BoxImage } from "../Products/StyleProducts";
import { Dialog } from "../Dialog/Dialog";
import { Apresentation, SalesArea, EnvPrice, Quantiti } from "./StyleSalesArea";
import { useContext, useEffect, useState } from "react";
import FormDialog from "../Forms/Forms";
import UserContext from "../../contexts/UserContext";
import { getAllProduct } from "../../services/useGetInfos";
import { useNavigate } from "react-router-dom";
import { shopName } from "../../services/api";
import { postCart } from "../../services/usePosts";
 
export default function Sales() {  
  const [ dialog, setDialog ] = useState();
  const [ product, setProduct ] = useState({ dais: null, cont: 1 });
  const { setValue, userData } = useContext(UserContext);
  const id = window.location.pathname.split("/")[3];
  
  useEffect(() => {
    getAllProduct(id)
      .then((value) => { setProduct({ ...value[0], cont: product.cont }); })
      .catch((i) => console.error(i));
  }, []);

  const navigate = useNavigate();

  const page = product.cont === 0 ? navigate(shopName) : product.cont; 
  
  function DialogBox() {
    if( !dialog ) {
      return;
    };
    return (
      <Dialog setDialog={ setDialog } >
        <FormDialog params={"dialog"} />
      </Dialog> 
    );
  };
  return(
    <>
      <DialogBox />
      <SalesArea>
        <BoxImage>
          { 
            product.UrlImage?.map((i) => {
              return(
                <Box>
                  <img src={i.urlImage}/>
                </Box>
              );})
          }
        </BoxImage>
        <Apresentation>
          <h1>
            {product?.name}
          </h1>
          <Quantiti>
            <button onClick={() => { setProduct({ ...product, cont: product.cont-1 });} }>-</button>
            <h2>{product?.cont}</h2>
            <button onClick={() => { setProduct({ ...product, cont: product.cont+1 });} }>+</button>
          </Quantiti>
          <EnvPrice>  
            <Input onChange={ e => setProduct({ ...product, cep: e.target.value })}/>
            <button onClick={ () =>  console.log(product.cep) }>
              Digite o cep para saber o preço do frete
            </button>  
          </EnvPrice>
          <EnvPrice>
            <h2>
              R$ { (product.cont*(product?.price/100)).toFixed(2) } {product.dais !== undefined ? `Seu produto chegara em ${ product.dais } dias`: "Coloque o cep a acima" } 
              
              <button onClick={ () => { postCart(product.id, product.cont, userData.token);}}>
                Colocar no carrinho
              </button>
              <button onClick={ () => { setDialog(true); } }>
                Finalizar compra
              </button>
            </h2>
          </EnvPrice> 
        </Apresentation>
      </SalesArea>
    </>
  );
};
