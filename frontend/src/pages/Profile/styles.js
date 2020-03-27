import styled from "styled-components";
import { ButtonLink } from "../../styles/Form";

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  ${ButtonLink} {
    width: 260px;
    margin-left: auto;
    margin-top: 0;
  }
`;

export const Span = styled.span`
  font-style: 20px;
  margin-left: 24px;
`;

export const Img = styled.img`
  height: 64px;
`;

export const BtnLogout = styled.button`
  height: 60px;
  width: 60px;
  border-radius: 4px;
  border: 1px solid #dcdce6;
  background: transparent;
  margin-left: 16px;
  transition: border-color 0.25s ease;

  &:hover {
    border-color: #999;
  }
`;

export const Title = styled.h1`
  margin-top: 80px;
  margin-bottom: 24px;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
  list-style: none;
`;

export const ListItem = styled.li`
  background: #fff;
  padding: 24px;
  border-radius: 8px;
  position: relative;
`;

export const Property = styled.strong`
  display: block;
  margin-bottom: 16px;
  color: #41414d;
`;

export const Value = styled.p`
  color: #737380;
  line-height: 21px;
  font-size: 16px;

  + ${Property} {
    margin-top: 32px;
  }
`;

export const Button = styled.button`
  position: absolute;
  right: 24px;
  top: 24px;
  border: 0;
  transition: opacity 0.25s ease;

  &:hover {
    opacity: 0.8;
  }
`;
