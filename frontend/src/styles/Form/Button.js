import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const ButtonStyles = css`
  width: 100%;
  height: 60px;
  background: ${props => props.theme.colors.primary};
  border: 0;
  border-radius: 8px;
  color: #fff;
  font-weight: 700;
  margin-top: 16px;

  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;

  transition: filter 0.25s ease;

  &:hover {
    filter: brightness(90%);
  }
`;

export const ButtonLink = styled(Link)`
  ${ButtonStyles}
`;

export const Button = styled.button`
  ${ButtonStyles}
`;
