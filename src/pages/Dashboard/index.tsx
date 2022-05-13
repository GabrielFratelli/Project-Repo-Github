import React from "react";

import logoImg from "../../assets/logo.svg";

import { Title, Form, Repositories } from "./styles";

export const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github.</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

     <Repositories>
    <a href="teste">

    </a>
     </Repositories>
    </>
  );
};
