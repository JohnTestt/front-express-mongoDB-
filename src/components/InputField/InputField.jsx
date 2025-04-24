
import {
    InputContainer,
    IconContainer,
    StyledLabel,
    StyledField,
    ErrorText 

} from './style/style';


export const InputField = ({ label, placeholder, type, name, errors, touched, icon: Icon }) => {


    return (
        <>

            <InputContainer>
                <StyledLabel htmlFor={name}>{label}</StyledLabel>
               
               <IconContainer error={errors[name] && touched[name]}>
                {Icon && <Icon fontSize="inherit" />}
                </IconContainer>
                <StyledField
                    id={name}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    hasError={errors[name] && touched[name]}
                />
                {errors[name] && touched[name] && <ErrorText>{errors[name]}</ErrorText>}
            </InputContainer>
        </>
    )
}

