import styled from "styled-components";

export const ContainerBox = styled.section`

    transform: ${({ open }) => (open ? 'translate(-50%, 0)' : 'translate(-50%, 100%)')}; // mantém centralizado
    transition: transform 0.3s ease-in-out;
    margin: 0 auto;
    position: fixed;  /* Mantém o SnackBar fixo na tela */
    z-index: 100;
    bottom: 120px;
    left: 50%;
    width: 80%;
    max-width: 400px;
  
 
    
`
export const BoxItens = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align:center;
    
`
export const Itens = styled.div`
padding: 1rem 2rem;
background-color: #4caf50;
border-radius: 4px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`
export const TitleItens = styled.h3`
color: #f2fce9;

`