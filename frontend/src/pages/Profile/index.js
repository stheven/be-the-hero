import React, { useEffect, useState, useMemo } from "react";

import {
  Container,
  Header,
  Img,
  Span,
  BtnLogout,
  Title,
  List,
  ListItem,
  Property,
  Value,
  Button
} from "./styles";

import logoImg from "../../assets/logo.svg";
import { ButtonLink } from "../../styles/Form";
import { FiPower, FiTrash2 } from "react-icons/fi";
import { useTheme } from "styled-components";
import api from "../../services/api";
import { useToasts } from "react-toast-notifications";
import { SESSION_NAME_LS } from "../../constants";
import { useHistory } from "react-router-dom";
export default function Profile() {
  const {
    colors: { primary }
  } = useTheme();
  const { addToast } = useToasts();
  const [incidents, setIncidents] = useState([]);
  const history = useHistory();

  const { name, id } = useMemo(() => {
    let r = { name: null, id: null };
    const ongDataStr = localStorage.getItem(SESSION_NAME_LS);
    if (ongDataStr) {
      const ongData = JSON.parse(ongDataStr);
      r = {
        name: ongData.name,
        id: ongData.id
      };
    }
    return r;
  }, []);

  if (!id) {
    history.replace("/");
  }

  useEffect(() => {
    async function getData() {
      try {
        const response = await api.get("profile");
        setIncidents(response.data);
      } catch (e) {
        addToast("Erro ao consultar os casos, tente novamente", {
          appearance: "error"
        });
      }
    }
    getData();
  }, []);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`);
      setIncidents(incidents.filter(item => item.id !== id));
    } catch (e) {
      addToast("Erro ao deletar o caso, tente novamente", {
        appearance: "error"
      });
    }
  }

  function handleLogout() {
    localStorage.removeItem(SESSION_NAME_LS);
    history.replace("/");
  }

  return (
    <Container>
      <Header>
        <Img src={logoImg} alt="Be the Hero" />
        <Span>Bem vinda, {name}</Span>

        <ButtonLink to="/incidents/new">Cadastrar novo caso</ButtonLink>
        <BtnLogout type="button" onClick={handleLogout}>
          <FiPower size={18} color={primary} />
        </BtnLogout>
      </Header>

      <Title>Casos cadastrados</Title>

      <List>
        {incidents.map(incident => (
          <ListItem key={incident.id}>
            <Property>CASO: </Property>
            <Value>{incident.title}</Value>

            <Property>DESCRIÇÃO: </Property>
            <Value>{incident.description}</Value>

            <Property>VALOR: </Property>
            <Value>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
              }).format(incident.value)}
            </Value>

            <Button
              type="button"
              onClick={() => {
                handleDeleteIncident(incident.id);
              }}
            >
              <FiTrash2 size={20} color="#A8A8B3" />
            </Button>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
