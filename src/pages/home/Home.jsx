import React from "react";
//import { Climate } from "../../components/Climate/Climate";
import { Container, Title, Section, Itens, Footer } from "./style/style";

export const Home = () => {
    return (
        <>
            {/* <Climate/> */}
            <Container>
                <Title>Meu Projeto CRUD Fullstack</Title>

                <Section>
                    <Itens>
                        <h2>👨‍💻 Descrição do Projeto:</h2>
                        <ul>
                            <li> O projeto FRONT APP_DB é uma aplicação React + Vite que implementa um CRUD de pacientes, integrando com uma API RESTful em Node.js/Express.</li>
                            <li> O backend utiliza MongoDB para armazenamento dos dados dos pacientes.</li>
                            <li>A estrutura do projeto está organizada em componentes reutilizáveis, páginas e estilos com Styled-Components.</li>
                            <br></br>
                            <h2>✅ Estrutura organizada:</h2>
                            <h3> Backend - API RESTful com Node.js e Express </h3>
                            <li>Routes: definem as rotas de API (/pacientes para CRUD).</li>
                            <li>Controllers: centralizam a lógica de manipulação dos dados.</li>
                            <li>Models: definem o esquema de Paciente usando Mongoose.</li>

                            <h3> Frontend - React com Context API e Interface Amigável</h3>
                            <li>Context API para gerenciar estado global e chamadas à API.</li>
                            <li>Pegamos os dados dos usuários e salvamos no banco de dados.</li>
                            <li>Colocamos as informações em uma planilha simples</li>

                            <li>
                                Com isso, conseguimos realizar o CRUD:
                                <ul>
                                    <li><b>Create</b> (Criar)</li>
                                    <li><b>Read</b> (Ler)</li>
                                    <li><b>Update</b> (Atualizar)</li>
                                    <li><b>Delete</b> (Apagar)</li>
                                </ul>
                            </li>
                        </ul>
                    </Itens>

                </Section>

                <Section>
                    <Itens>
                        <h2>💡 A Aplicação Possui:</h2>
                        <ul>
                            <li>
                                <b>Styled-Components</b>: para estilizar os componentes do projeto.
                            </li>
                            
                                <b>Backend</b>
                                <ul>
                                    <li>Node.js, Express, Mongoose, express-validator, MongoDB</li>
                                   
                                </ul>
                            
                            
                                <b>Frontend</b>
                                <ul>
                                    <li>React, React Router DOM, Axios, Context API, Styled-Components</li>
                                </ul>
                           
                        </ul>
                    </Itens>

                </Section>

                <Footer>
                    <p> 🚀 Este projeto foi inteiramente desenvolvido por mim, para demonstrar as funcionalidades do CRUD e boas práticas com React.</p>
                </Footer>
            </Container>
        </>

    );
};
