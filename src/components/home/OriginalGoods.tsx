import styled from 'styled-components';
import SectionName from '@components/common/Home/SectionName';
import OriginalGoodsImageOneUrl from '@assets/image/photos/OriginalGoods/Rectangle 22.png';
import OriginalGoodsImageTwoUrl from '@assets/image/photos/OriginalGoods/Rectangle 23.png';
import OriginalGoodsImageThreeUrl from '@assets/image/photos/OriginalGoods/Rectangle 24.png';
import OriginalGoodsImageFourUrl from '@assets/image/photos/OriginalGoods/Rectangle 25.png';
import OriginalGoodsImageFiveUrl from '@assets/image/photos/OriginalGoods/Rectangle 26.png';
import { contents, descriptions } from '@constants/Home/OriginalGoodsConstants';
import { useMemo } from 'react';
import OriginalGoodsItem, {
  originalGoodsItemProp,
} from './OriginalGoods/OriginalGoodsItem';

export default function OriginalGoods() {
  const memoOriginalGoodsItemList: originalGoodsItemProp[] = useMemo(() => {
    return [
      {
        imageUrl: OriginalGoodsImageOneUrl,
        content: contents[0],
        description: descriptions[0],
      },
      {
        imageUrl: OriginalGoodsImageTwoUrl,
        content: contents[1],
        description: descriptions[1],
      },
      {
        imageUrl: OriginalGoodsImageThreeUrl,
        content: contents[2],
        description: descriptions[2],
      },
      {
        imageUrl: OriginalGoodsImageFourUrl,
        content: contents[3],
        description: descriptions[3],
      },
      {
        imageUrl: OriginalGoodsImageFiveUrl,
        content: contents[4],
        description: descriptions[4],
      },
    ];
  }, []);

  return (
    <OriginalGoodsContainer>
      <SectionName nameString="오리지널 굿즈" />
      <OriginalGoodsGridContainer>
        {memoOriginalGoodsItemList.map((element, idx) => (
          <OriginalGoodsItem
            imageUrl={element.imageUrl}
            content={element.content}
            description={element.description}
          />
        ))}
      </OriginalGoodsGridContainer>
    </OriginalGoodsContainer>
  );
}

const OriginalGoodsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OriginalGoodsGridContainer = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 16px;

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 10px;
    column-gap: 9px;
  }
`;
