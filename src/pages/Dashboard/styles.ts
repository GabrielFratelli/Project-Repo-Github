import styled from 'styled-components';
import { shade } from 'polished'; // importando o elemento que faz ter a cor secundaria do botão quando se acontece o hover

export const Title = styled.h1`
  font-size: 48px;
  color: #3A3A3A;
  max-width: 450px;
  line-height: 56px;

  margin-top: 80px;
  border: 1px solid black;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;
  border: 1px solid black;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3A3A3A;
    border: 1px solid black;

    &::placeholder {
      color: #A8A8B3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #04D361;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #FFF;
    font-weight: bold;
    transition: background-color 0.4s;

    &:hover {
      background: ${shade(0.2, '#04D361')}; // aqui serve pra ter o hover no botão
    }
  }
`;

export const Repositories = styled.div`

`;