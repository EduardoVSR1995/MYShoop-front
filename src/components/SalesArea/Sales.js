import { Input } from "../Forms/StyleForms";
import { Box } from "../Products/StyleProducts";
import { Apresentation, SalesArea, EnvPrice, Quantiti } from "./StyleSalesArea";
 
export default function Sales() {  
  return(
    <SalesArea>
      <Box></Box>
      <Apresentation>
        <h1>
          A melhor smart TV que você vai ver ^^ com 49 polevadasxsxsx
        </h1>
        <Quantiti>
          <button>-</button>
          <h2>1</h2>
          <button>+</button>
        </Quantiti>
        <EnvPrice>  
          <Input />
          <button>
            Digite o cep para saber o preço do frete
          </button>  
        </EnvPrice>
        <EnvPrice>
          <h2>
          R$400,00 Seu produto chegara em 5 dias
            <button>
              Finalizar compra
            </button>
          </h2>
        </EnvPrice> 
      </Apresentation>
    </SalesArea>
  );
};
