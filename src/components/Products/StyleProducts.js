import styled from "styled-components";

const Products = styled.div`
  display: flex ;
  flex-wrap: wrap;
  justify-content: space-evenly ;
  margin-top: 30px;
  
`;

const Box = styled.div`
  background: blue;
  margin: 0px 5px 10px 5px  ;
  width: 195px;
  height: 300px;
  border-radius: 15px ;
  
`;

export { Products, Box };
