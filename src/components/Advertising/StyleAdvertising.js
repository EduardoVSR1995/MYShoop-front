import styled from "styled-components";

const Basket = styled.div`

  width: 90% ;
  display: flex;
  justify-content: end;  
  margin: 0px 0px 20px 0px ;
  div{
    position: relative ;
    background: #6666F0;
    width: 25px;
    height: 25px ;
    bottom: 15px;
    border-radius: 50% ;
    color: #FFFFFF ;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img{
    mix-blend-mode:multiply;
    position:absolute ;
    width: 25px ;
  }

`;

const Advertising = styled.div`
  margin: 200px 20px 20px 20px ;

  span{
    height: 30vh ;
    display: flex;
    align-items: center;
    justify-content: center;
    
    h1{
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 30px;
      line-height: 36px;
      margin: 20px ;
      height: 90% ;
      width: 50%;  
      div{
        height: 50px ;
      }
    }
    h2{
      width: 60%;
      font-style: normal;
      font-weight: 400;
      font-size: 30px;
      line-height: 36px;
      color: #7E7E7E;
    }
    div{
      height: 100% ;
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      
      img{
      max-height: 100% ;
      width: 400px;
    }
    }
  }
`;

export { Basket, Advertising };
