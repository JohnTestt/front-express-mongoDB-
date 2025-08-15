import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  line-height: 1.6;
  margin: 0 auto;
  width: 85%;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-family: "Faculty Glyphic", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 1.6rem;
  color: #1976d2;
`;

export const Section = styled.section`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const Itens = styled.div`
  margin: 15px;
  width: 100%;

  h2 {
    padding-bottom: 0.6rem;
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    margin: 15px 5px;
  }
`;

export const Footer = styled.footer`
  margin-top: 30px;
  text-align: center;
  color: #888;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
