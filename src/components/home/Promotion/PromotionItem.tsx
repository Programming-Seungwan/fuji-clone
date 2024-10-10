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

  p {
    width: 90%;
  }

  @media (max-width: 767px) {
    font-size: 6px;
  }

  @media (min-width: 768px) {
    font-size: 10px;
  }
`;
