
// import {
//     InputContainer,
//     IconContainer,
//     StyledLabel,
//     StyledField,
//     ErrorText 

// } from './style/style';


// export const InputField = ({ label, placeholder, type, name, errors, touched, icon: Icon }) => {


//     return (
//         <>

//             <InputContainer>
//                 <StyledLabel htmlFor={name}>{label}</StyledLabel>
               
//                <IconContainer error={errors[name] && touched[name]}>
//                 {Icon && <Icon fontSize="inherit" />}
//                 </IconContainer>
//                 <StyledField
//                     id={name}
//                     name={name}
//                     type={type}
//                     placeholder={placeholder}
//                     hasError={errors[name] && touched[name]}
//                 />
//                 {errors[name] && touched[name] && <ErrorText>{errors[name]}</ErrorText>}
//             </InputContainer>
//         </>
//     )
// }


// src/components/InputField/InputField.jsx
import { useField } from "formik";
import {
  InputContainer,
  IconContainer,
  StyledLabel,
  StyledField,
  ErrorText 
} from "./style/style";

export const InputField = ({ label, icon: Icon, ...props }) => {
  const [field, meta] = useField(props);  // conecta ao Formik

  return (
    <InputContainer>
      <StyledLabel htmlFor={props.name}>{label}</StyledLabel>
      <IconContainer error={meta.touched && meta.error}>
        {Icon && <Icon fontSize="inherit" />}
      </IconContainer>
      <StyledField
        {...field}   // value, onChange, onBlur
        {...props}   // name, type, placeholder
      />
      {meta.touched && meta.error && <ErrorText>{meta.error}</ErrorText>}
    </InputContainer>
  );
};
