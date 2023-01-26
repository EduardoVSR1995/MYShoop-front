import styled from "styled-components";

export default function Forms() {
  return(
    <Form>
      <Input></Input>
      <Input></Input>
      <Input></Input>
      <Input></Input>
      <Input></Input>
    </Form>
  );  
};

const Form = styled.form`
  margin-top: 30px ;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100vw;
`;

const Input = styled.input`
  margin: 10px 0px 10px 0px ;
  width: 70vh;
  height: 35px;
  border-radius: 10px;
  background: #C8C8F4;
`;

