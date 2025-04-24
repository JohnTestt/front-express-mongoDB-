import styled from "styled-components";
import { Field } from "formik";

export const InputContainer = styled.div`
  min-width: 40%;
  margin: 18px 0;
  position: relative;

  @media (max-width: 900px) {
    width: 90%;
  }
`;

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

export const StyledField = styled(Field)`
  width: 100%;
  height: 48px;
  padding: 12px 12px 12px 40px; /* Espaço à esquerda para o ícone */
  font-size: 16px;
  border: 1px solid ${({ hasError }) => (hasError ? "red" : "#ccc")};
  border-radius: 4px;
  transition: border-color 0.3s;

  &:focus {
    border-color: ${({ hasError }) => (hasError ? "red" : "#007bff")};
    box-shadow: 0 0 5px rgba(21, 101, 192, 0.7);
    outline: none;
  }

  @media (max-width: 768px) {
    max-width: 80%;
  }

  @media (orientation: landscape) {
    width: 80%;
  }
`;

export const IconContainer = styled.div`
  position: absolute;
  left: 12px;
  top: 60%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  font-size: 20px;
  color: ${({ error }) => (error ? "red" : "#007bff")};
  pointer-events: none;

  & > svg {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    & > svg {
      font-size: 20px;
    }
  }
`;

export const ErrorText = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;