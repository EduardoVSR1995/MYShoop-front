import Forms from "../../components/Forms/Forms";
import Bar from "../../components/Bar/Bar";
import { Link } from "react-router-dom";

export default function SigsForm({ signin }) {
  const nameShoop = "MyShoop";
  
  return(
    <>
      <Link to={"/"}>
        <Bar>{ nameShoop }</Bar>
      </Link>
      <Forms signin={ signin } />
    </>
  );
};
