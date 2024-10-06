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

  div {
    font-weight: bold;
    color: #9d9d9d;
    box-shadow: 0 0 0 0.5px #9d9d9d;
    padding: 5px;
  }
`;
