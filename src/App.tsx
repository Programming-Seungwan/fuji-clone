import { ThemeProvider } from 'styled-components';
import { theme } from '@style/theme';
import { GlobalStyle } from '@style/GlobalStyle';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>hi</div>
    </ThemeProvider>
  );
}

export default App;
