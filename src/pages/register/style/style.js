import styled from "styled-components";


export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  max-width: 50%;
  margin: 0 auto;
  margin-top: 5rem;
  padding: 20px 0px;
  overflow: hidden; 
  z-index: 1;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-top: 2rem;
    box-shadow: none;
  }

  @media (orientation: landscape) and (max-width: 900px) {
    box-shadow: none;
    max-width: 60%;
  }
`;


export const SaveButton = styled.button`
  padding: 18px 120px;
  border: none;
  border-radius: 12px;
  background-color: #1976d2;
  color: white;
  font-size: 18px;
  cursor: pointer;
  font-weight: bold;

  margin: 2rem 0;

  &:hover {
    background-color: #1565c0;
  }
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;



