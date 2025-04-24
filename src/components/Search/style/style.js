import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';

export const Container = styled.section`
max-width: 95%;
margin: 0 auto;
display: flex;
justify-content: right;
margin-top: 1rem;

@media (max-width: 768px) {
    justify-content: center;
    max-width: 80%;
  }
`

export const SearchBarWrapper = styled.div`
display: flex;
align-items: center;
border: 1px solid #ccc;
border-radius: 8px;
padding: 0.2rem;
width: 100%;
max-width: 400px;
background-color: #fff;
`;

export const StyledInput = styled.input`
border: none;
outline: none;
flex: 1;
padding: 0.5rem;
font-size: 1rem;
`;

export const StyledSearchIcon = styled(SearchIcon)`
color: #aaa;
margin-right: 0.5rem;
`;