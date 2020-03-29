import React, { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  Header,
  Image,
  HeaderText,
  HeaderTextBold,
  Title,
  Description,
  IncidentList,
  IncidentProperty,
  IncidentValue,
  DetailsButton,
  DetailsButtonText,
  Incident
} from "./styles";

import logoImg from "../../assets/logo.png";
import api from "../../services/api";

export default function Incidents() {
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  function navigateToDetail(incident) {
    navigation.navigate("Detail", { incident });
  }

  async function loadIncidents() {
    if (loading) return;

    if (total > 0 && incidents.length === total) return;

    setLoading(true);

    try {
      const response = await api.get("/incidents", {
        params: {
          page
        }
      });

      setIncidents([...incidents, ...response.data]);
      setTotal(response.headers["x-total-count"]);
      setPage(page + 1);
    } catch (e) {
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadIncidents();
  }, []);

  return (
    <Container>
      <Header>
        <Image source={logoImg} />
        <HeaderText>
          Total de{" "}
          <HeaderTextBold>
            {total} caso{total !== 1 ? "s" : ""}
          </HeaderTextBold>
          .
        </HeaderText>
      </Header>

      <Title>Bem-vindo!</Title>
      <Description>Escolha um dos casos abaixo e salve o dia.</Description>

      <IncidentList
        data={incidents}
        keyExtractor={incident => String(incident.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        renderItem={({ item: incident }) => {
          return (
            <Incident>
              <IncidentProperty>ONG:</IncidentProperty>
              <IncidentValue>{incident.name}</IncidentValue>

              <IncidentProperty>CASO:</IncidentProperty>
              <IncidentValue>{incident.title}</IncidentValue>

              <IncidentProperty>Valor</IncidentProperty>
              <IncidentValue>
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL"
                }).format(incident.value)}
              </IncidentValue>

              <DetailsButton onPress={() => navigateToDetail(incident)}>
                <DetailsButtonText>Ver mais detalhes</DetailsButtonText>
                <Feather name="arrow-right" size={16} color="#E02041" />
              </DetailsButton>
            </Incident>
          );
        }}
      />
    </Container>
  );
}
