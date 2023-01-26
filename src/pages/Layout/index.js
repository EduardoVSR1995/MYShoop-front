import Bar from "../../components/Bar/Bar";
import Forms from "../../components/Forms/Forms";

export default function Layout() {  
  const nameShoop = "MyShoop";
  return(
    <>
      <Bar>{nameShoop}</Bar>
      <Forms/>
    </>
  );
};
