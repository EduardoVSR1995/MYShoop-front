import styled from "styled-components";
import Top from "../../components/Top/Top";
import SalesArea from "../../components/SalesArea/Sales";
import { TopProduct } from "../../components/SalesArea/StyleSalesArea";

export default function ProductUser() {  
  const nameShoop = "MyShoop";
  return(
    <>
      <TopProduct>  
        <Top />     
      </TopProduct>
      <SalesArea/>
    </>
  );
};
