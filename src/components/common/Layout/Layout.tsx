import Header from '@components/common/Header';
import Footer from '@components/common/Footer';

interface LayoutProp {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProp) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
