import styled from 'styled-components';

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
