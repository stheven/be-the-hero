import styled from "styled-components";
import { Form as Unform } from "@unform/web";

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  padding: 96px;
  background: #f0f0f5;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Section = styled.section`
  width: 100%;
  max-width: 380px;
`;

export const Title = styled.h1`
  margin: 64px 0 32px;
  font-size: 32px;
`;

export const P = styled.p`
  font-size: 18px;
  color: #737380;
  line-height: 32px;
`;

export const Img = styled.img``;

export const Form = styled(Unform)`
  width: 100%;
  max-width: 450px;

  input {
    margin: 8px 0 0;
  }
`;
