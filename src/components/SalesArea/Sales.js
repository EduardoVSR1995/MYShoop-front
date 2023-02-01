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
import { postFret } from "../../services/postFret";

export default function Sales() {  
  const [ dialog, setDialog ] = useState();
  const [ product, setProduct ] = useState({ cont: 1 });
  const { setValue, userData } = useContext(UserContext);
  const id = window.location.pathname.split("/")[3];

  useEffect(() => {
    getAllProduct(id)
      .then((value) => { setProduct({ ...value[0], cont: product.cont }); })
      .catch((i) => console.error(i));
  }, []);
  console.log(product);
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

  function fret(id, quantiti, cep) {
    if(cep.length !== 8 || !Number(cep) ) {
      alert("Cep tem que ter oito caracteres e todos numericos");
      return 0; 
    };
    postFret(id, quantiti, cep)
      .then((i) => { setProduct({ ...product, fret: (parseInt((i[0].Valor).replace(",", ""))), dais: i[0].PrazoEntrega }); })
      .catch((i) => console.error(i));
  }

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
            <Input type="text" maxLength={8} onChange={ e => setProduct({ ...product, cep: e.target.value })}/>
            <button onClick={ () => fret(id, product.cont, product.cep) }>
              Digite o cep para saber o preço do frete
            </button>  
          </EnvPrice>
          <EnvPrice>
            <h2>
              R$ { (product.cont*(product?.price/100)).toFixed(2) } {product.dais ? <>   Seu produto chegara em { product.dais } dias <br/> Com o valor do frete ${ (product.fret/100).toFixed(2) } </> : "Coloque o cep a acima" } 
              
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
