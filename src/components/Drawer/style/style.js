import styled from 'styled-components';



export const MenuContainer= styled.section`
    
    width: ${({ IsExpanded }) => ( IsExpanded ? "220px" : "80px")};
    height: 100%;
    transition: transform 0.3s ease-in-out;
    left: 0;
    top: 0;
    position: fixed; 
    z-index: 9;
   background-color: #FFFFFF;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    overflow: hidden; // esconde components que 'vazem' do drawer

    @media (max-width: 768px) {
    width: 35%;
    transform: ${({isMobileOpen}) => (isMobileOpen ? 'translateX(0)' : 'translateX(-100%)')};
  
  };

  transition: transform 0.3s ease-in-out;
    
`
export const MenuItens= styled.div`
    display: flex;
    align-items: center;
    padding: .3rem;
    border-radius: 5px;
    margin: 0 1.5rem;
    width: 100%;
  

    &:hover {
  
    background-color: #f0f0f0;
    cursor: pointer;
  
  }

  &:nth-child(1) {
     margin-top: 2.2rem;
    }
`
export const ListIcon= styled.div`
    padding:.5rem;

& > svg {
font-size: 28px; /* Define o tamanho diretamente no SVG */
}
    
`
export const ListText= styled.div`
    padding-left: .5rem;
`

export const BoxMobile = styled.section`
 
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semitransparência */
  z-index: 8;
  display: ${({ open }) => (open ? 'block' : 'none')}; /* Só aparece se estiver aberto */
 
  @media (min-width: 769px) {
   
   display: none; 
 }

` 

