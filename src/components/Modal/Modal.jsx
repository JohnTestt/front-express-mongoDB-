import { Container, Box, BoxItens, ItensButton, Button } from "./style/style"

export const Modal = ({open, title, subtitle, close, onConfirm}) => (
  
    <Container open = {open}>
    <Box>
        <BoxItens>
            <h3>{title}</h3>
            <h4>{subtitle}</h4>
            <ItensButton>
                <Button onClick={() => onConfirm()}>Confirmar</Button> 
                <Button onClick={() => close()}>Cancelar</Button>
            </ItensButton>
        </BoxItens> 
    </Box>

    </Container>
)