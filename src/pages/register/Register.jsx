import { useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import AccountBoxIcon from '@mui/icons-material/AccountBox';

import { InputField } from "../../components/InputField/InputField";
import {SnackBar} from '../../components/SnackBar/SnackBar';
import { FormContainer, SaveButton } from "./style/style";


export const Register = () => {

    const navigate = useNavigate();
    const API_URL = import.meta.env.VITE_API_URL;


    const [openSnackBar, setOpenSnackbar] = useState(false);
    const [openMessageSnackBar, setMessageSnackBar] = useState('');

    const handleOpenSnackbar = () => {
      setOpenSnackbar(true);
    };
  
    const handleCloseSnackbar = () => {
      setOpenSnackbar(false);
    };
  
   

    const validationSchema = Yup.object({
        name: Yup.string().required("O nome é obrigatório."),
        mail: Yup.string().email("E-mail inválido.").required("O e-mail é obrigatório."),
        age: Yup.number()
          .required("A idade é obrigatória.")
          .positive("A idade deve ser um número positivo.")
          .integer("A idade deve ser um número inteiro."),
          phone: Yup.string()
          .required("O telefone é obrigatório.")
          .matches(
            /^\(\d{2}\)\s\d{4,5}-\d{4}$/,
            "O telefone deve estar no formato (XX) XXXXX-XXXX")
      });

    const messagerSnackBar = (message) => {
       
        setOpenSnackbar(true)
        setMessageSnackBar(message)

        setTimeout(() => {
           
            setOpenSnackbar(false)
        },5000)
    };

   const finallyLogin = (sucess = true) => {
      
    if (sucess) {
      
       messagerSnackBar('Adicionado com sucesso!')
       handleOpenSnackbar();
      
        setTimeout(() => {
          
          handleCloseSnackbar();
            navigate('/')
        },6000)
    }
    
    else {
  
       messagerSnackBar('Algo deu errado!!')
       
    }

   }



      // Função para lidar com o envio do formulário
  const handleSubmit = async (values, { resetForm }) => {

    try {
      
      await axios.post( `${API_URL}/pacientes`, values)
      console.log("Dados enviados:", values.name);
    

      // Notificação de sucesso
     finallyLogin()
      resetForm(); // Reseta o formulário após o envio

    } catch (error) {
        console.log(" aconteceu um error:" ,error)
      // Notificação de erro

      
    }
  };



    return (
        <>
            <Formik
        initialValues={{ name: "", mail: "", age: "", phone: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
         {({ errors, touched, isSubmitting }) => (
          <FormContainer as={Form}>
            <InputField
              label="Name"
              name="name"
              type="text"
              placeholder={'Digite seu nome'}
              errors={errors}
              touched={touched}
              icon={AccountBoxIcon}
            />
            <InputField
              label="Mail"
              name="mail"
              type="email"
              errors={errors}
              touched={touched}
            />
            <InputField
              label="Age"
              name="age"
              type="number"
              errors={errors}
              touched={touched}
            />
            <InputField
              label="Phone"
              name="phone"
              type="text"
              errors={errors}
              touched={touched}
            />
            <SaveButton type="submit" disabled={isSubmitting}>
              Registrar
            </SaveButton>
          </FormContainer>
        )}
      </Formik>
            
        {
          openSnackBar && 
           <SnackBar
           open= {openSnackBar}
           title= {openMessageSnackBar}
        
             aria-live="assertive"
            />
        }
        </>
    )
    
}

