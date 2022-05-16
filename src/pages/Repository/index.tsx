import React from "react";
import { Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import logoImg from "../../assets/logo.svg";

import { Header, RepositoryInfo, Issues} from "./styles";

interface RepositoryParams {
  repository: string;
}

export const Repository: React.FC = () => {
  // const { params } = useRouteMatch<RepositoryParams>();
  
  return (
    <>
    <Header>
      <img src={logoImg} alt="Github Explorer" />
      <Link to="">
        <FiChevronLeft />
        Voltar
      </Link>
    </Header>

    <RepositoryInfo>
    <header>
      <img src="https://avatars0.githubusercontent.com/u/28929274?v=4" alt="Rocketseat" />
      <div>
        <strong>abc</strong>
        <p>abcdefgh</p>
      </div>
    </header>
    <ul>
      <li>
        <strong>1808</strong>
        <span>Stars</span>
      </li>
      <li>
        <strong>48</strong>
        <span>Forks</span>
      </li>
      <li>
        <strong>67</strong>
        <span>Issues Abertas</span>
      </li>
    </ul>
    </RepositoryInfo>

    <Issues>
    <Link to={"abc"}>
      <div>
        <strong>abc</strong>
         <p>abc</p>
       </div>
       <FiChevronRight size={20} />
       </Link>
    </Issues>
    </>
  );
};
