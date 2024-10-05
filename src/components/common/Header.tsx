import styled from 'styled-components';

export default function Header() {
  return <HeaderContainer>header</HeaderContainer>;
}

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  z-index: 100;
  background-color: ${(props) => props.theme.colors.primary};
`;
