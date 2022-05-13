import { createGlobalStyle } from "styled-components"; // estou criando meu global.

import githubBackground from '../assets/github_background.svg' // estou importando o svg

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    border: 1px solid black;
  }

  body {
    background: #F0F0F5 url(${githubBackground}) no-repeat 70% top; // estou importando a imagem que vai ficar no fundo do background
    -webkit-font-smoothing: antialiased; // serve pra deixar o texto melhor, mais limpo
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
    border: 1px solid black;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
  }
`;