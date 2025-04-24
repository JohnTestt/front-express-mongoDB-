import styled from "styled-components";

export const StyledTable = styled.table`
  width: 100%;
  margin: 0 auto;
  border-collapse: collapse;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
 
  
  @media (max-width: 768px) {
    width: auto;
   
  }
`;


export const TableHeader = styled.th`
  background-color: #f4f4f4;
  color: #333;
  text-align: center;
  padding: 12px;
  border-bottom: 2px solid #ddd;
  //font-size: 1rem;
  font-size: clamp(0.9rem, 2vw, 1rem);
`;

export const StyleButton = styled.button`
  background-color: white;
  color: blue;
  display: flex;
  text-align: center;
  align-items: center;
  padding: 12px;
  font-size: clamp(0.9rem, 2vw, 1rem);
  border: none;
  margin-bottom: 1rem;


& > svg {
font-size: 28px; /* Define o tamanho diretamente no SVG */
}
`;