import { fretSchema } from "@/schemas";
import { calcularPrecoPrazo } from "correios-brasil/dist";
import productService from "../product-service";

export default async function fretProduct(obj: fretSchema) {
  const oneProduct = await productService.findProductId(obj.id);  
  const value = (Number(oneProduct.packingSize[0]));

  const size = value <= 20 ? (20*obj.quantiti).toString() : (value*obj.quantiti).toString();
  const env = await calcularPrecoPrazo({
    sCepOrigem: "81200100",
    sCepDestino: obj.sCepDestino,
    nVlPeso: "1",
    nCdFormato: "1",
    nVlComprimento: size,
    nVlAltura: size,
    nVlLargura: size,
    nCdServico: ["04510"],
    nVlDiametro: "0",
  });
  return env;
}
  
