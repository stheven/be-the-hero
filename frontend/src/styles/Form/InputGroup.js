import styled from "styled-components";
import { Input } from "./Input";

export const InputGroup = styled.div`
  display: flex;
  ${Input} + ${Input} {
    margin-left: 8px;
  }
`;
