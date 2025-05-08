import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

import { InputField } from "../../components/InputField/InputField";
import { SnackBar } from "../../components/SnackBar/SnackBar";
import { FormContainer, SaveButton } from "../register/style/style";

export const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Obtém o ID da URL
  const API_URL = import.meta.env.VITE_API_URL;

  const [initialValues, setInitialValues] = useState(null);
  const [openSnackBar, setOpenSnackbar] = useState(false);
  const [openMessageSnackBar, setMessageSnackBar] = useState("");

  // Esquema de validação com Yup
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


  // Buscar os dados do paciente pelo ID
  useEffect(() => {
    const fetchPatient = async () => {
      try {
       
        const response = await axios.get(`${API_URL}/pacientes/${id}`);
       
      
      setInitialValues(response.data);
      } catch (error) {
        console.error("Erro ao buscar paciente:", error);
        messagerSnackBar("Erro ao carregar dados!");
      }
    };

    fetchPatient();
  }, [id, API_URL]);

  // Função para exibir mensagem no SnackBar
  const messagerSnackBar = (message) => {
    setOpenSnackbar(true);
    setMessageSnackBar(message);

    setTimeout(() => {
      setOpenSnackbar(false);
    }, 5000);
  };

  // Envio do formulário (atualizar paciente)
  const handleSubmit = async (values) => {
    try {
      await axios.put(`${API_URL}/pacientes/${id}`, values);
       
      messagerSnackBar("Paciente atualizado com sucesso!");
      
      
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error("Erro ao atualizar paciente:", error);
      messagerSnackBar("Erro ao atualizar paciente!");
    }
  };

  // Se os dados ainda não foram carregados, exibir um carregando...
  if (!initialValues) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize // Atualiza os valores iniciais quando `initialValues` mudar
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
              Salvar alterações
            </SaveButton>
          </FormContainer>
        )}
      </Formik>

      <SnackBar open={openSnackBar} title={openMessageSnackBar} />
    </>
  );
};
