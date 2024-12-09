# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Projeto de Login em React

Este projeto consiste em uma aplicação simples de login desenvolvida com **ReactJS**. A interface permite que o usuário insira seu e-mail e senha, com um sistema básico de manipulação de estado usando o hook `useState`.

## Funcionalidades

- Tela de login com campos para e-mail e senha.
- Ícones para os campos de e-mail e senha, usando a biblioteca `react-icons`.
- Exibição de um alerta ao enviar o formulário, simulando o envio dos dados.
- Estilização da página usando **CSS**.
- Validação e manipulação de estado para os campos de entrada.

## Tecnologias Utilizadas

- **ReactJS**: Biblioteca JavaScript para construção da interface.
- **CSS**: Estilização da página e dos componentes.
- **react-icons**: Biblioteca para ícones, utilizada nos campos de login.
- **useState**: Hook do React para gerenciar o estado dos campos de entrada.

## Como Usar

### Pré-requisitos

- Tenha o **Node.js** instalado na sua máquina.
- Instale o **npm** ou **yarn** para gerenciar pacotes.

### Passos para Rodar o Projeto

1. Clone o repositório:
    ```bash
    git clone https://github.com/SEU_USUARIO/nome-do-repositorio.git
    ```

2. Navegue até a pasta do projeto:
    ```bash
    cd nome-do-repositorio
    ```

3. Instale as dependências do projeto:
    ```bash
    npm install
    ```

4. Execute o projeto:
    ```bash
    npm start
    ```

    O projeto será iniciado e você poderá acessá-lo no seu navegador em `http://localhost:3000`.

## Estrutura do Projeto

/meu-projeto │ ├── public │ └── index.html # HTML de entrada │ ├── src │ ├── Components │ │ └── Login │ │ └── Login.js # Componente de Login │ ├── App.js # Componente principal │ ├── App.css # Estilos da aplicação │ └── index.js # Ponto de entrada do React │ ├── package.json # Dependências e configurações do projeto └── README.md # Este arquivo


## Contribuindo

Sinta-se à vontade para contribuir para o projeto abrindo *issues* ou enviando *pull requests* com melhorias ou sugestões.

## License

Este projeto está licenciado sob a MIT License - veja o [LICENSE](LICENSE) para mais detalhes.
