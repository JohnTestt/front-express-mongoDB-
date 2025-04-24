import { BoxError, ItensError } from "./style/style"

export const Error = ({title, subtitle}) => (
   
   <BoxError>
        <ItensError>
        <h1> {title} </h1>
            <h6>{subtitle}</h6>
        </ItensError>
    
    </BoxError>
)