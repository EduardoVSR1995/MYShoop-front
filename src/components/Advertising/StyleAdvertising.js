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
  margin: 130px 0px 130px 20px ;
  
  .merchan{
    overflow: scroll;
    display: flex;
    width: 100%;
    width: 100% ;
    

  span{
    width: 100vw !important ;
    display: flex;
    align-items: center;
    justify-content: center;
    
    h1{
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 30px;
      margin: 20px ;
      height: 90% ;
      width: 100%;  
      > div{
        height: 50px ;
      }
    }
    h2{
      width: 60%;
      font-style: normal;
      font-weight: 400;
      font-size: 30px;
      color: #7E7E7E;
    }
    > div{
      height: 100% ;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      
      img{
      max-height: 100% ;
      width: 15vw;
    }
  }
    }
  }
`;

const Sub = styled.div`
  margin: 100px 0px 30px 0px ;
  background-color: #6666F0;
  width: 200px;
  height: 50px;
  border-radius: 10px ;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

const BoxConfig = styled.div`
  span{
    width: 97vw ;
    span{
      top: 180px ;
      left:0px ;
      width: 300px ;
      flex-wrap: wrap ;
      align-items: flex-start ;
      text-align: center ;
      font-size: 20px ;
      h1{
        :hover{
          background: grey ;
          border-radius: 20px ; 
        }
        margin: 10px;
        width: 100vw;
      }
      div{
        opacity: 0;
        left: 0px ;
        position: fixed ;
        
      }
      span{
          left:300px ;
          top: 180px;
          position: inherit ;
      
          span{
            top: 180px;
            position: fixed ;
            width: 75vw;
            background: blue ;
            right: 200px ;
      
            span{
              background: green ;
              width: 70vw ;
              height: 70vh;
              overflow: scroll ;
            }
            div{
              width: 500px ;
              height: 400px ;
              opacity: 1;
              left:300px;
              background: red ;
              > div{
                height: 50px
              }
            }
           overflow: auto ;
          }
        }
    }
  }  
`;

export { BoxConfig, Basket, Advertising, Sub };
