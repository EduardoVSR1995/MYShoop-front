import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import { Form, Input } from "./StyleForms";

import { shopName } from "../../services/api";
import { toast } from "react-toastify";
import { signUp, signin } from "../../services/userApi";
import ProductContext from "../../contexts/ProductContext";
import { paydPix } from "../../services/usePay";
import { removCart } from "../../services/useDelet";

export default function Forms({ params, type }) {
  const [forms, setForms] = useState({});
  const { setValue, userData } = useContext(UserContext);
  const { productData } = useContext(ProductContext);

  const navigate = useNavigate();

  async function form(e, forms) {
    e.preventDefault();

    try {
      let user;

      if (params === "dialog") {
        const imgPix = await paydPix(
          userData.token,
          productData.id,
          productData.cont,
          forms.fone,
          forms.street,
          forms.city,
          forms.homeNumber,
          forms.cep
        );
        const valid = imgPix.imgQrcod ? setForms({ ...forms, imgQrcod: imgPix.imgQrcod }) : "";
        if(type) {
          removCart(type, userData.token);
        };
        return;
      }
      if (params === "signin") {
        user = await signin(forms.email, forms.password);
      }
      if (params === "signup") {
        user = await signUp(forms.url, forms.name, forms.email, forms.password);
      }
      setValue(user);
      navigate(shopName);
      toast("Login realizado");
    } catch (error) {
      toast("Loguin não realizado");
    }
  };

  function verifi(e) {
    e.preventDefault();
    if (forms.password !== forms.confirmPassword) return alert("As senhas tem que ser iguais");
    return form(e, forms);
  };

  if (params === "signup") {
    return (
      <Form onSubmit={e => verifi(e, forms)}>
        <Input required placeholder={"Url da foto"} onChange={e => setForms({ ...forms, url: e.target.value })} />
        <Input required placeholder={"Nome"} onChange={e => setForms({ ...forms, name: e.target.value })} />
        <Input required type={"email"} placeholder={"E-mail"} onChange={e => setForms({ ...forms, email: e.target.value })} />
        <Input required type={"password"} placeholder={"Senha"} onChange={e => setForms({ ...forms, password: e.target.value })} />
        <Input required type={"password"} placeholder={"Confirme a senha"} onChange={(e) => setForms({ ...forms, confirmPassword: e.target.value })} />
        <button type={"submit"} >Criar conta</button>
        <Link to={shopName + "/sign-in"} >Log in</Link>
      </Form>
    );
  };

  if (params === "dialog") {
    return (
      forms.imgQrcod ?
        <img src={forms.imgQrcod} />
        :
        <Form onSubmit={e => form(e, forms)}>
          <Input required maxLength={8} pattern={"^[0-9]{8}$"} type={"text"} placeholder="cep" onChange={e => setForms({ ...forms, cep: e.target.value })} />
          <Input required placeholder="Cidade" onChange={e => setForms({ ...forms, city: e.target.value })} />
          <Input required placeholder="Nome da rua" onChange={e => setForms({ ...forms, street: e.target.value })} />
          <Input required placeholder="Numero da casa" onChange={e => setForms({ ...forms, homeNumber: e.target.value })} />
          <Input required placeholder="Numero de telefone" onChange={e => setForms({ ...forms, fone: e.target.value })} />
          <h1>Total do pedido R$ {(productData.price / 100).toFixed(2)} </h1>
          <button type={"submit"}>Finalizar compra</button>
        </Form>

    );
  };

  return (
    <Form onSubmit={e => form(e, forms)}>
      <Input required type={"email"} placeholder={"E-mail"} onChange={e => setForms({ ...forms, email: e.target.value })} />
      <Input required type={"password"} placeholder={"Senha"} onChange={e => setForms({ ...forms, password: e.target.value })} />
      <button type={"submit"} value={"Submit"}>Entrar</button>
      <Link to={shopName + "/sign-up"} >Criar conta</Link>
    </Form>
  );
};
