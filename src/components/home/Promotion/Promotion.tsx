import styled from 'styled-components';
import PromotionItem, { PromotionItemProps } from './PromotionItem';
import {
  mainContents,
  periods,
  descriptions,
} from '@constants/Home/PromotionConstants';
import PromotionItemOneImageUrl from '@assets/image/photos/Promotion/Rectangle 5.png';
import PromotionItemTwoImageUrl from '@assets/image/photos/Promotion/Rectangle 6.png';
import PromotionItemThreeImageUrl from '@assets/image/photos/Promotion/Rectangle 7.png';
import PromotionItemFourImageUrl from '@assets/image/photos/Promotion/Rectangle 8.png';
import { useMemo } from 'react';

export default function Promotion() {
  const memoPromotionItems: PromotionItemProps[] = useMemo(() => {
    return [
      {
        imageUrlString: PromotionItemOneImageUrl,
        mainContent: mainContents[0],
        periodString: periods[0],
        descriptionString: descriptions[0],
      },
      {
        imageUrlString: PromotionItemTwoImageUrl,
        mainContent: mainContents[1],
        periodString: periods[1],
        descriptionString: descriptions[1],
      },
      {
        imageUrlString: PromotionItemThreeImageUrl,
        mainContent: mainContents[2],
        periodString: periods[2],
        descriptionString: descriptions[2],
      },
      {
        imageUrlString: PromotionItemFourImageUrl,
        mainContent: mainContents[3],
        periodString: periods[3],
        descriptionString: descriptions[3],
      },
    ];
  }, []);

  return (
    <PromotionContainer>
      <PromotionSpan>프로모션</PromotionSpan>
      <PromotionGridContainer>
        {memoPromotionItems.map((element, idx) => {
          return (
            <PromotionItem
              key={idx}
              imageUrlString={element.imageUrlString}
              mainContent={element.mainContent}
              periodString={element.periodString}
              descriptionString={element.descriptionString}
            />
          );
        })}
      </PromotionGridContainer>
    </PromotionContainer>
  );
}

const PromotionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const PromotionSpan = styled.span`
  font-weight: bold;
  @media (max-width: 767px) {
    font-size: 18px;
    padding: 21px;
  }

  @media (min-width: 768px) {
    font-size: 32px;
    padding: 28px;
  }
`;

const PromotionGridContainer = styled.div`
  display: grid;
  width: 80%;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 12px;
    row-gap: 16px;
  }
`;
