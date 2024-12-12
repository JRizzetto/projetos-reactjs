# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Previsão do Tempo

Este é um projeto desenvolvido com React JS que fornece a previsão do tempo atual e para os próximos 5 dias de uma cidade. O aplicativo consome dados da API OpenWeatherMap para fornecer informações como temperatura, umidade, sensação térmica, pressão atmosférica e descrição do clima.

## Funcionalidades

- **Previsão atual do tempo:** Exibe a temperatura atual, sensação térmica, umidade, pressão e descrição do clima para uma cidade inserida.
- **Previsão para os próximos 5 dias:** Mostra a previsão de temperatura mínima e máxima, juntamente com a descrição do clima para os próximos 5 dias.

## Tecnologias Utilizadas

- **React JS**: Para criação da interface interativa.
- **Axios**: Para realizar requisições à API do OpenWeatherMap.
- **CSS**: Para estilização do aplicativo.

## Como Usar

1. Clone o repositório:
   \`\`\`bash
   git clone https://github.com/seu-usuario/devclub-previsao-do-tempo.git
   \`\`\`

2. Navegue até o diretório do projeto:
   \`\`\`bash
   cd devclub-previsao-do-tempo
   \`\`\`

3. Instale as dependências:
   \`\`\`bash
   npm install
   \`\`\`

4. Inicie o servidor de desenvolvimento:
   \`\`\`bash
   npm start
   \`\`\`

5. Abra o navegador e acesse `http://localhost:3000` para ver o aplicativo em funcionamento.

## Estrutura do Projeto

A estrutura do projeto é a seguinte:

\`\`\`bash
devclub-previsao-do-tempo/
├── src/
│   ├── components/
│   │   ├── WeatherInfo/
│   │   │   ├── WeatherInfo.jsx
│   │   │   └── WeatherInfo.css
│   │   ├── WeatherInfo5days/
│   │   │   ├── WeatherInfo5days.jsx
│   │   │   └── WeatherInfo5days.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── package.json
├── README.md
└── node_modules/
\`\`\`

## Descrição dos Arquivos

- **`main.jsx`**: Arquivo de entrada do aplicativo que monta o componente `App` no DOM.
- **`App.jsx`**: Componente principal que gerencia o estado do clima atual e a previsão de 5 dias, além de realizar as requisições para a API OpenWeatherMap.
- **`WeatherInfo.jsx`**: Exibe as informações do clima atual, como temperatura, umidade, e sensação térmica.
- **`WeatherInfo5days.jsx`**: Exibe a previsão do tempo para os próximos 5 dias, incluindo as temperaturas mínimas e máximas para cada dia.
- **`index.css`**: Estilos globais do aplicativo, incluindo a fonte e o layout geral.
- **`WeatherInfo.css` e `WeatherInfo5days.css`**: Estilos específicos para os componentes de clima atual e previsão dos próximos 5 dias.

## API Utilizada

A API utilizada para obter as informações meteorológicas é a **OpenWeatherMap**.

- **Endpoint para previsão atual:**
  \`\`\`bash
  https://api.openweathermap.org/data/2.5/weather?q={cidade}&appid={chave-api}&lang=pt_br&units=metric
  \`\`\`
- **Endpoint para previsão de 5 dias:**
  \`\`\`bash
  https://api.openweathermap.org/data/2.5/forecast?q={cidade}&appid={chave-api}&lang=pt_br&units=metric
  \`\`\`

## Observações

- Para usar o projeto localmente, é necessário obter uma chave de API da OpenWeatherMap, que pode ser gerada [aqui](https://openweathermap.org/api).
- Insira sua chave de API no código, substituindo o valor da variável `key` no arquivo `App.jsx`.

## License

Este projeto é de código aberto e pode ser usado e modificado de acordo com as necessidades de cada um.

---

Feito com ❤️ por Jefferson Rizzetto


