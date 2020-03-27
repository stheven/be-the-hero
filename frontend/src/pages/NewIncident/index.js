import React from "react";

import { Container, Content, Title, P, Section, Img, Form } from "./styles";

import logoImg from "../../assets/logo.svg";
import { Link } from "../../styles/Link";
import { FiArrowLeft } from "react-icons/fi";
import { useTheme } from "styled-components";
import Input from "../../components/Form/Input";
import Textarea from "../../components/Form/Textarea";
import { Button } from "../../styles/Form";
import { useToasts } from "react-toast-notifications";
import api from "../../services/api";
import { useHistory } from "react-router-dom";

export default function NewIncident() {
  const {
    colors: { primary }
  } = useTheme();
  const { addToast } = useToasts();
  const history = useHistory();

  async function handleSubmit(data) {
    try {
      await api.post("incidents", data);
      history.push("/profile");
    } catch (e) {
      addToast("Erro ao cadastrar, tente novamente.", { appearance: "error" });
    }
  }

  return (
    <Container>
      <Content>
        <Section>
          <Img src={logoImg} alt="Be The Hero" />

          <Title>Cadastro novo caso</Title>
          <P>
            Decreva o caso detalhadamente para encontrar um herói para resolver
            isso
          </P>

          <Link to="/profile">
            <FiArrowLeft size={16} color={primary} />
            Voltar para home
          </Link>
        </Section>

        <Form onSubmit={handleSubmit}>
          <Input name="title" placeholder="Título do caso" />
          <Textarea name="description" placeholder="Descrição" />
          <Input name="value" placeholder="Valor em reais" />

          <Button type="submit">Cadastrar</Button>
        </Form>
      </Content>
    </Container>
  );
}
