import { SearchBarWrapper, StyledSearchIcon, StyledInput, Container } from "./style/style";

export const Search = ({value, onChange, placeholder}) => (

    <Container>
        <SearchBarWrapper>
            <StyledSearchIcon />
            <StyledInput
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </SearchBarWrapper>
    </Container>
) 