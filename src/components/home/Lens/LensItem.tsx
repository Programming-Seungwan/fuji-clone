import styled from 'styled-components';

interface LensItemProps {
  imageUrl: string;
  descriptionString: string;
  contentString: string;
}

export default function LensItem({
  imageUrl,
  descriptionString,
  contentString,
}: LensItemProps) {
  return (
    <LensItemContainer>
      <LensItemImage src={imageUrl} alt="lens item image" />
      <LensItemDescription>
        <p>{descriptionString}</p>
      </LensItemDescription>
      <LensItemContent>
        <p>{contentString}</p>
      </LensItemContent>
      <LensItemButton>More</LensItemButton>
    </LensItemContainer>
  );
}

const LensItemContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
`;

const LensItemImage = styled.img`
  width: 100%;
`;

const LensItemDescription = styled.div`
  color: #6d6d6d;
  height: 64px;
  font-size: 12px;
  padding-top: 9px;
  word-wrap: break-word;
  white-space: normal;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  line-height: 1.5;

  p {
    width: 90%;
  }

  @media (max-width: 767px) {
    height: 37px;
    font-size: 6px;
  }
`;

const LensItemContent = styled.div`
  font-weight: bold;
  font-size: 16px;
  width: 100%;
  word-wrap: break-word;
  white-space: normal;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  p {
    width: 90%;
    margin-bottom: 9px;
  }

  @media (max-width: 767px) {
    font-size: 10px;
    margin-bottom: 5px;
  }
`;

const LensItemButton = styled.button`
  background-color: ${(props) => props.theme.colors.themeBlue};
  color: white;
  font-size: 12px;
  width: 68px;
  height: 30px;
  margin-bottom: 13px;

  @media (max-width: 767px) {
    font-size: 10px;
    width: 49px;
    height: 18px;
    margin-bottom: 11px;
  }
`;
