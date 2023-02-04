import { Box, BoxImage } from "../Products/StyleProducts";
import { Apresentation, SalesArea, EnvPrice } from "../SalesArea/StyleSalesArea";
import { useEffect, useState } from "react";
import { getOneProduct } from "../../services/useGetInfos";

function getProduct(id, setProduct) {
  const select = getOneProduct(id)
    .then((value) => {
      setProduct({ ...value });
    })
    .catch((i) => console.error(i));
};

export default function PaydArea({ type, oneProduct }) {
  const [product, setProduct] = useState({ ...oneProduct });

  useEffect(() => {
    getProduct(type, setProduct);
  }, [type]);
  return (
    <>
      <SalesArea>
        <BoxImage>
          {
            product.UrlImage?.map((i, index) => {
              return (
                <Box key={index}>
                  <img src={i.urlImage} />
                </Box>
              );
            })
          }
        </BoxImage>
        <Apresentation>
          <h1>
            {product?.name}
          </h1>
          <EnvPrice>
            <h2>
              {
                oneProduct.payd ?
                  "Seu Produto esta a caminho"
                  :
                  <h3>
                    <h4>
                      Seu Produto ainda não foi pago<br/><br/>
                      Valor ${(oneProduct.valor/100).toFixed(2)} <br/>
                      Com frete no valor de ${(oneProduct.fret/100).toFixed(2)}
                    </h4>
                    <button onClick={() => 
                      oneProduct.payd ?
                        window.location.href= `https://wa.me/${oneProduct.phone}`
                        :
                        ""                    
                    }>
                      {
                        oneProduct.payd ?
                          "Falar com o vendedor"
                          :
                          "Pague ao lado"
                      }
                    </button>
                    <img src={oneProduct.location} />
                  </h3>
              }              
            </h2>
          </EnvPrice>
        </Apresentation>
      </SalesArea>
    </>
  );
};
