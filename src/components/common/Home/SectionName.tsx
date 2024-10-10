import styled from 'styled-components';

interface sectionNameProps {
  nameString: string;
}

export default function SectionName({ nameString }: sectionNameProps) {
  return <SectionSpan>{nameString}</SectionSpan>;
}

const SectionSpan = styled.span`
  font-weight: bold;

  @media (max-width: 767px) {
    font-size: 18px;
    padding: 21px 0px;
  }

  @media (min-width: 768px) {
    font-size: 32px;
    padding: 30px 0px;
  }
`;
