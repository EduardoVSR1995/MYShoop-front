import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { shopName } from "../../services/api";
import { getProducts } from "../../services/useProduct";
import { Products, Box } from "./StyleProducts";

export default function Product() {
  const [ product, setProduct ] = useState();
  const navigat = useNavigate();

  useEffect(() => {
    getProducts()
      .then((value) => setProduct(value))
      .catch((value) => console.error(value));  
  }, []);

  return(
    <>
      <Products>
        { 
          product ? 
            product.map( (i) => {
              return(
                <Box key={i.id} onClick={() => navigat(`${shopName}/product/${i.id}`)}>
                  <img src={i.UrlImage[0].urlImage}/>
                  <div>{i.name}</div>
                </Box>
              );})
            : "" 
        }
      </Products>
    </>
  );
};
