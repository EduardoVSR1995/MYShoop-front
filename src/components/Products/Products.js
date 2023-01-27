import { Link } from "react-router-dom";
import { Products, Box } from "./StyleProducts";

export default function Product() {  
  return(
    <>
      <Products>
        <Link to={"/product"}>
          <Box></Box>
        </Link>          
      </Products>
    </>
  );
};
