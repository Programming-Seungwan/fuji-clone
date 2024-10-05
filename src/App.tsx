import { ThemeProvider } from 'styled-components';
import { theme } from '@style/theme';
import { GlobalStyle } from '@style/GlobalStyle';
import Layout from '@components/common/Layout/Layout';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <div>Main content</div>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
