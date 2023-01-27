import styled from "styled-components";

export function Dialog({ setDialog, children }) {
  return(
    <AllBox>
      <DialogBox onClick={ () => setDialog("") }/>
      <ComandBox >
        {children}
      </ComandBox>
    </AllBox> 
  );
};

const AllBox = styled.span`
    display: flex ;
    justify-content: center ;
    margin-top: 5vw ;
    
`;

const ComandBox = styled.span`
    z-index: 3;
    position: absolute ;
    width: 80vw ;
    height: 80vh; 
    border-radius: 20px ;
    background: #FFFFFF ;
`;

const DialogBox = styled.div`
    z-index:2 ;
    top: 0;
    position: absolute;
    width: 100% ;
    height: 100vh;
    background: #000000 ;
    opacity: 0.8 ;
    
`;
