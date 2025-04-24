import {ContainerBox, BoxItens, Itens, TitleItens} from './style/style'

export const SnackBar = ({open, title}) => (

    <ContainerBox open = {open}>
        <BoxItens>
            <Itens>
                <TitleItens>{title}</TitleItens> 
            </Itens>
        </BoxItens>
    </ContainerBox>
)