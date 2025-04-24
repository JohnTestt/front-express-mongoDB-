import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100%;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  z-index: 4;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  color: #ffffff;
`;
export const Box = styled.div`
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 8px;
  padding: 22px;
  background-color: #1976d2;
`;
export const BoxItens = styled.div`
  h3,
  h4 {
    padding-bottom: 8px;
  }
`;
export const ItensButton = styled.div`
  display: flex;
  justify-content: right; 
  padding-top: 8px;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  padding: 4px;
  padding-top: 8px;
  margin-left: 15px;
  color: #000000;

  &:hover {
    color: red;
  }
`;
