import styled from 'styled-components';

export interface PromotionItemProps {
  imageUrlString: string;
  mainContent: string;
  periodString: string;
  descriptionString: string;
}

export default function PromotionItem({
  imageUrlString,
  mainContent,
  periodString,
  descriptionString,
}: PromotionItemProps) {
  return (
    <PromotionItemContainer>
      <img src={imageUrlString} />
      <PromotionMainContent>
        <p>{mainContent}</p>
      </PromotionMainContent>
      <PromotionPeriod>{periodString}</PromotionPeriod>
      <PromotionDescription>
        <p>{descriptionString}</p>
      </PromotionDescription>
      <PromotionItemButton>MORE</PromotionItemButton>
    </PromotionItemContainer>
  );
}

const PromotionItemContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
`;

const PromotionMainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-weight: bold;
  line-height: 1.5;
  word-wrap: break-word;
  white-space: normal;
  padding-top: 10px;

  p {
    width: 90%;
  }
  @media (max-width: 767px) {
    font-size: 10px;
    padding-top: 5px;
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const PromotionPeriod = styled.div`
  line-height: 1.5;
  @media (max-width: 767px) {
    font-size: 9px;
  }

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

const PromotionDescription = styled.div`
  line-height: 1.5;
  color: #6d6d6d;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 42px;
  font-size: 10px;
  margin-bottom: 18px;

  p {
    width: 90%;
  }

  @media (max-width: 767px) {
    font-size: 6px;
    height: 24px;
    margin-bottom: 12spx;
  }
`;

const PromotionItemButton = styled.button`
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
