import styled from "styled-components";

export const TableRow = styled.tr`
  text-align: center;
  &:nth-child(even) {
    background-color: #f9f9f9;
  }

  &:hover {
    background-color: #f1f1f1;
  }
`;

export const TableCell = styled.td`
  padding: 12px;
  border-bottom: 1px solid #ddd;
  font-size: clamp(0.9rem, 2vw, 1rem);
`;

export const ActionButtonsContainer = styled.div`
 display: flex;
 flex-wrap: wrap;
 justify-content: center;
 gap: 5px;
`;

export const ActionButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 12px;
  margin: 0 5px;
  border-radius: 4px;
  cursor: pointer; 
  font-size: clamp(0.8rem, 1.8vw, 0.9rem);
 

  &:hover {
    background-color: #0056b3;
  }
`;