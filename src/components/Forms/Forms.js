import { Link } from "react-router-dom";
import { Form, Input } from "./StyleForms";

export default function Forms({ signin, setForm }) {
  if(!signin) {  
    return(
      <Form onSubmit={ (e) => setForm(e) }>
        <Input placeholder="Url da foto" />
        <Input placeholder="Nome" />
        <Input placeholder="E-mail" />
        <Input placeholder="Senha"/>
        <Input placeholder="Confirme a senha" />
        <button>Criar conta</button>
        <Link to="/sign-in" >Log in</Link> 

      </Form>
    );
  };
  return(
    <Form onSubmit={ (e) => setForm(e) }>
      <Input placeholder="E-mail" />
      <Input placeholder="Senha"/>
      <button>Entrar</button>
      <Link to="/sign-up" >Criar conta</Link> 
    </Form>
  );
};

