import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
${reset}

*{
  box-sizing: border-box;
}

html, body {
 /* Noto Sans 웹 폰트 가져오기 */
 @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap');

/* 글로벌 스타일 적용 */
  font-family: 'Noto Sans', sans-serif;
  min-width: 380px;
  max-width: 1375px;
  margin: 0 auto;
  height: 100vh
}

#root {
  height: 100%;
}
`;
