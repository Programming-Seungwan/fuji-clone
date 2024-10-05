import styled from 'styled-components';
import Header from '@components/common/Header';
import Footer from '@components/common/Footer';

interface LayoutProp {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProp) {
  return (
    <LayoutContainer>
      <Header />
      {children}
      <Footer />
    </LayoutContainer>
  );
}

const LayoutContainer = styled.main`
  width: 100%;
  height: 100%;
  position: relative;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
`;
