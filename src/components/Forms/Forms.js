import { Link } from "react-router-dom";
import Bar from "../Bar/Bar";
import { Top } from "../Top/StyleTop";
import { Form, Input } from "./StyleForms";

export function Forms({ signin, setForm }) {
  if(!signin) {  
    return(
      <Form onSubmit={ (e) => setForm(e) }>
        <Input required placeholder="Url da foto" />
        <Input required placeholder="Nome" />
        <Input required type={"email"} placeholder="E-mail" />
        <Input required type={"password"} placeholder="Senha"/>
        <Input required type={"password"} placeholder="Confirme a senha" />
        <button>Criar conta</button>
        <Link to="/sign-in" >Log in</Link> 

      </Form>
    );
  };
  return(
    <Form onSubmit={ (e) => setForm(e) }>
      <Input required type={"email"} placeholder="E-mail" />
      <Input required type={"password"} placeholder="Senha"/>
      <button>Entrar</button>
      <Link to="/sign-up" >Criar conta</Link> 
    </Form>
  );
};

export function FormDialog({ setFormDialog }) {
  return(
    <Form onSubmit={ (e) => setFormDialog(e) }>
      <Input required maxLength={8} placeholder="cep" />
      <Input required placeholder="Cidade" />
      <Input required placeholder="Nome da rua" />
      <Input required placeholder="Numero da casa"/>
      <Input required placeholder="Nome no cartão" />
      <Input required placeholder="Numero do cartão" />
      <Input required placeholder="data de validade" />
      <Input required maxLength={3} placeholder="cvv" />
      <Input required placeholder="Bandeira" list="bandeira" />
      <datalist id="bandeira">
        <option value={"Master"}>Master</option>
        <option value={"Visa"}>Visa</option>
      </datalist>
      <h1>Total do pedido R$ 400,00 </h1>
      <button>Finalizar compra</button>
    </Form>  
  );
};
