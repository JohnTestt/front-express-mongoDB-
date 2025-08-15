import styled from "styled-components"

export const MenuButton = styled.button `
position: fixed;
top: 20px;
left: ${({ isExpanded }) => isExpanded ? "200px" : "65px"}; // Acompanha o drawer
width: 40px;
height: 40px;
//border-radius: 50%;
border: none;
background: transparent;
color: black;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
transition: all 0.3s ease;
z-index: 10;

& > svg {
font-size: 30px; /* Define o tamanho diretamente no SVG */
}
    

@media (max-width: 768px) {
    position: sticky;
   left: ${({ isExpanded }) => isExpanded ? "30%" : "0"};
    top: 0;
  };

`

 export const Main = styled.main `

transition: margin-left 0.3s ease-in-out;
margin-left: ${({open}) => (open ? '240px' : '100px')};


 @media (max-width: 768px) {
    margin-left: 0;
  }
 `