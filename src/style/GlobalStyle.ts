import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
${reset}

*{
  box-sizing: border-box;
}

html, body {
  min-width: 380px;
  max-width: 1375px;
  margin: 0 auto;
  height: 100vh
}

#root {
  height: 100%;
}
`;
