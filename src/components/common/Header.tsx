import styled from 'styled-components';

export default function Header() {
  return (
    <HeaderContainer>
      <ResponsiveLogoImage />
      <LinkGroup>
        <p>신제품</p>
        <p>프로모션</p>
        <p>카메라</p>
        <p>렌즈</p>
        <p>액세서리</p>
        <p>프로젝터</p>
        <p>오리지널 굿즈</p>
      </LinkGroup>
      <MagnifyingGlass />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  position: absolute;
  top: 0;
  width: 100%;
  height: 70px;
  z-index: 100;
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ResponsiveLogoImage = styled.img`
  @media (max-width: 767px) {
    content: url('/assets/image/logo/SmallFujiLogo.png');
  }

  @media (min-width: 768px) {
    content: url('/assets/image/logo/BigFujiLogo.png');
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
`;

const MagnifyingGlass = styled.img`
  @media (max-width: 767px) {
    content: url('/assets/image/SVG/SmallMagnifyingGlass.svg');
  }

  @media (min-width: 768px) {
    content: url('/assets/image/SVG/BigMagnifyingGlass.svg');
    margin-left: 211px;
  }
  cursor: pointer;
`;
