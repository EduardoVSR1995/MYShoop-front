import { Box } from "../Products/StyleProducts";
import { Apresentation, SalesArea, EnvPrice } from "../SalesArea/StyleSalesArea";
 
export default function User() {  
  return(
    <>
      <SalesArea>
        <Box></Box>
        <Apresentation>
          <h1>
            A melhor smart TV que você vai ver ^^ com 49 polevadasxsxsx
          </h1>
          <EnvPrice>
            <h2>
            R$400,00 Aguardando postagem do produto
              <button >
                Entrar em contato com o vendedor
              </button>
            </h2>
          </EnvPrice> 
        </Apresentation>
      </SalesArea>
    </>
  );
};
