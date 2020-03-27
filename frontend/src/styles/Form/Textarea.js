import styled from "styled-components";
import { styles } from "./Field";

export const Textarea = styled.textarea`
  ${styles}
  min-height: 140px;
  resize: vertical;
  padding: 16px 24px;
  line-height: 24px;
`;
