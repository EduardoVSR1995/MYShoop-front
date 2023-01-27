import Top from "../../components/Top/Top";
import UserArea from "../../components/UserArea/UserArea";
import { TopProduct } from "../../components/SalesArea/StyleSalesArea";

export default function User() {
  return(
    <>
      <TopProduct>
        <Top to={"/"} />
      </TopProduct>
      <UserArea />
    </>
  );
};
