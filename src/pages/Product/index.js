import Top from "../../components/Top/Top";
import SalesArea from "../../components/SalesArea/Sales";
import { TopProduct } from "../../components/SalesArea/StyleSalesArea";

export default function Product() {
  return(
    <>
      <TopProduct>
        <Top to={"/"} />
      </TopProduct>
      <SalesArea/>
    </>
  );
};
