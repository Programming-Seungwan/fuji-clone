import { ThemeProvider } from 'styled-components';
import { theme } from '@style/theme';
import { GlobalStyle } from '@style/GlobalStyle';
import Layout from '@components/common/Layout/Layout';
import Home from '@pages/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Home />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
