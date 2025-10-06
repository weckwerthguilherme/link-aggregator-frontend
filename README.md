# Link Aggregator - Frontend

Este é o projeto de frontend para a aplicação Link Aggregator, um agregador de links no estilo "Linktree", construído durante um fim de semana.

A interface consome a API REST do backend para exibir uma página de perfil com uma lista de links customizáveis. O projeto foi desenvolvido com React.

## Tecnologias Utilizadas

* **React 19**
* **Vite:** Como ferramenta de build e servidor de desenvolvimento.
* **TypeScript:** Para tipagem estática e segurança no código.
* **Axios:** Para fazer as requisições HTTP para o backend.
* **Bootstrap:** Para estilização e layout responsivo.
* **Vercel:** Plataforma de nuvem para o deploy.

## Como Executar Localmente

1.  Instale as dependências: `npm install`
2.  Crie um arquivo `.env` na raiz e adicione a variável `VITE_API_URL` com o endereço do seu backend.
3.  Execute o servidor de desenvolvimento: `npm run dev`
