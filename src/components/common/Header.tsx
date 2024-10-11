import styled from 'styled-components';
import BigFujiLogoURL from '@assets/image/logo/BigFujiLogo.png';
import SmallFujiLogoURL from '@assets/image/logo/SmallFujiLogo.png';
import BigMagnifyingGlassURL from '@assets/image/SVG/BigMagnifyingGlass.svg';
import SmallMagnifyingGlassURL from '@assets/image/SVG/SmallMagnifyingGlass.svg';

const HeaderTabArray = [
  '신제품',
  '프로모션',
  '카메라',
  '렌즈',
  '액세서리',
  '프로젝터',
  '오리지널 굿즈',
];

export default function Header() {
  return (
    <HeaderContainer>
      <ResponsiveLogoImage />
      <LinkGroup>
        {HeaderTabArray.map((el) => (
          <p>{el}</p>
        ))}
      </LinkGroup>
      <MagnifyingGlass />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  z-index: 100;
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    padding: 0px 15px;
  }
`;

const ResponsiveLogoImage = styled.img`
  @media (max-width: 767px) {
    content: url(${SmallFujiLogoURL});
  }

  @media (min-width: 768px) {
    content: url(${BigFujiLogoURL});
    margin-right: 253px;
  }
`;

const LinkGroup = styled.div`
  display: flex;
  align-items: center;
  column-gap: 24px;

  p {
    cursor: pointer;
    color: ${(props) => props.theme.colors.themeBlack};
    font-size: 14px;
  }

  @media (max-width: 767px) {
    visibility: hidden;
  }
`;

const MagnifyingGlass = styled.img`
  @media (max-width: 767px) {
    content: url(${SmallMagnifyingGlassURL});
  }

  @media (min-width: 768px) {
    content: url(${BigMagnifyingGlassURL});
    margin-left: 211px;
  }
  cursor: pointer;
`;
