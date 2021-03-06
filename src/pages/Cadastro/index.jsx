import Input from "../../components/Input";
import Select from "../../components/Select";
import Button from "../../components/Button";
import * as yup from "yup";
import { Container } from "./style.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

const Cadastro = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const history = useHistory();
  const axios = require("axios").default;
  const BASE_URL = "https://adopet-api-cm3.herokuapp.com";
  const [signupError, setSignupError] = useState("");

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatório")
      .min(3, "Mínimo 3 caracteres"),
    email: yup.string().required("Email obrigatório").email("E-mail inválido"),
    phone: yup
      .string()
      .min(11, "Minimo 11 números")
      .matches(
        /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/,
        "Conter somente numeros"
      ),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(6, "Mínimo 6 caracteres")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{6,}$/,
        "Senha deve conter uma letra maiúscula, um número e um desses símbolos($*&@#)"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas não conferem"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    axios({
      method: "post",
      url: `${BASE_URL}/register`,
      data: {
        email: `${data.email}`,
        password: `${data.password}`,
        name: `${data.name}`,
        phone: "123456789",
        avatar: `${data.avatar}`,
        type: `${data.type}`,
      },
    })
      .then((response) => {
        toast.success("Cadastrado com sucesso");
        history.push("/login");
      })
      .catch((err) => {
        toast.error("Esse email já foi cadastrado");
        setSignupError("Falha ao cadastrar ");
      });
  };

  return !token ? (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Cadastro</h1>
        <Input
          label="Nome*"
          type="text"
          name="name"
          placeholder="Digite seu nome"
          error={errors.name?.message}
          register={register}
        />
        <Input
          label="Email*"
          type="text"
          name="email"
          placeholder="Digite seu email"
          error={errors.email?.message}
          register={register}
        />
        <Input
          label="Telefone*"
          type="text"
          placeholder="Digite o Telefone"
          name="phone"
          error={errors.phone?.message}
          register={register}
        />
        <Input
          label="Senha*"
          type="password"
          name="password"
          placeholder="Digite sua senha"
          error={errors.password?.message}
          register={register}
        />
        <Input
          label="Confirme sua senha*"
          type="password"
          placeholder="Digite a senha novamente"
          name="confirmPassword"
          error={errors.confirmPassword?.message}
          register={register}
        />
        <Input
          label="Avatar"
          type="avatar"
          name="avatar"
          placeholder="URL da imagem"
          error={errors.avatar?.message}
          register={register}
        />
        <label htmlFor="type">Tipo</label>

        <Select name="type" register={register} />

        {signupError !== "" ? <h4>{signupError}</h4> : <></>}
        <Button type="submit">Registrar</Button>
        <h3>
          Já possui conta? <Link to="/login">Faça login</Link>
        </h3>
        <p>*Campos obrigatórios</p>
      </form>
    </Container>
  ) : (
    history.push("/")
  );
};

export default Cadastro;
