import Forms from "../../components/Forms/Forms";
import Bar from "../../components/Bar/Bar";

export default function SigsForm({ signin }) {
  const nameShoop = "MyShoop";
  
  return(
    <>
      <Bar>{ nameShoop }</Bar>
      <Forms signin={ signin } />
    </>
  );
};
