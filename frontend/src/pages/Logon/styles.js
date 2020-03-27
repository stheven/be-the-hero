import styled from "styled-components";
import { Form as Unform } from "@unform/web";

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SectionForm = styled.section`
  width: 100%;
  max-width: 350px;
  margin-right: 30px;
`;

export const Form = styled(Unform)`
  margin-top: 100px;
`;

export const Logo = styled.img``;

export const Img = styled.img``;

export const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 32px;
`;
