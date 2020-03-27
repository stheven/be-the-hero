import React from "react";

import Input from "../../components/Form/Input";
import { useTheme } from "styled-components";
import { Container, SectionForm, Title, Logo, Form, Img } from "./styles";

import api from "../../services/api";

import { FiLogIn } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";
import herosImg from "../../assets/heroes.png";
import { Button } from "../../styles/Form";
import { Link } from "../../styles/Link";
import { useToasts } from "react-toast-notifications";
import { useHistory } from "react-router-dom";
import { SESSION_NAME_LS } from "../../constants";
export default function Logon() {
  const {
    colors: { primary }
  } = useTheme();

  const { addToast } = useToasts();
  const history = useHistory();
  async function handleSubmit(data) {
    try {
      const response = await api.post("sessions", data);

      localStorage.setItem(
        SESSION_NAME_LS,
        JSON.stringify({
          id: data.id,
          name: response.data.name
        })
      );
      history.push("/profile");
    } catch (e) {
      addToast("Falha no login, tente novamente", {
        appearance: "error"
      });
    }
  }

  return (
    <Container>
      <SectionForm>
        <Logo src={logoImg} alt="Be The Hero" />
        <Form onSubmit={handleSubmit}>
          <Title>Faça seu logon</Title>

          <Input type="text" name="id" placeholder="Sua ID" />
          <Button type="submit">Entrar</Button>

          <Link to="/register">
            <FiLogIn size={16} color={primary} />
            Não tenho cadastro
          </Link>
        </Form>
      </SectionForm>
      <Img src={herosImg} alt="Heros" />
    </Container>
  );
}
