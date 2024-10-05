import styled from 'styled-components';
import linknames from '@constants/footer/linkname';

export default function Footer() {
  return (
    <FooterContainer>
      <FooterLinks>
        {linknames.map((el) => (
          <div>{el}</div>
        ))}
      </FooterLinks>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  height: 180px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterLinks = styled.div`
  display: flex;
  column-gap: 9px;
`;
