import React from "react";

import { Container, Content, Title, P, Section, Img, Form } from "./styles";
import { useHistory } from "react-router-dom";
import logoImg from "../../assets/logo.svg";
import { Link } from "../../styles/Link";
import { FiArrowLeft } from "react-icons/fi";
import { useTheme } from "styled-components";
import Input from "../../components/Form/Input";
import { InputGroup, Button } from "../../styles/Form";
import api from "../../services/api";
import { useToasts } from "react-toast-notifications";

export default function Register() {
  const { addToast } = useToasts();
  const history = useHistory();

  const {
    colors: { primary }
  } = useTheme();

  async function handleSubmit(data) {
    try {
      const response = await api.post("ongs", data);
      addToast(`Seu ID de acesso: ${response.data.id}`, {
        appearance: "success"
      });
      history.push("/");

      // localStorage.setItem(
      //   SESSION_NAME_LS,
      //   JSON.stringify({
      //     id: response.data.id,
      //     name: data.name
      //   })
      // );

      // history.push("/profile");
    } catch (e) {
      addToast("Erro no cadastro, tente novamente", { appearance: "error" });
    }
  }

  return (
    <Container>
      <Content>
        <Section>
          <Img src={logoImg} alt="Be The Hero" />

          <Title>Cadastro</Title>
          <P>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </P>

          <Link to="/">
            <FiArrowLeft size={16} color={primary} />
            Voltar para o logon
          </Link>
        </Section>

        <Form onSubmit={handleSubmit}>
          <Input name="name" placeholder="Nome da ONG" />
          <Input type="email" name="email" placeholder="E-mail" />
          <Input name="whatsapp" placeholder="Whatsapp" />

          <InputGroup>
            <Input name="city" placeholder="Cidade" />
            <Input name="uf" placeholder="UF" style={{ width: 80 }} />
          </InputGroup>

          <Button type="submit">Cadastrar</Button>
        </Form>
      </Content>
    </Container>
  );
}
