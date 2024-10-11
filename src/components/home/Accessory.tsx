import SectionName from '@components/common/Home/SectionName';
import styled from 'styled-components';
import AccessoryImageOneUrl from '@assets/image/photos/Accessory/Rectangle 18 (1).png';
import AccessoryImageTwoUrl from '@assets/image/photos/Accessory/Rectangle 18.png';
import AccessoryImageThreeUrl from '@assets/image/photos/Accessory/Rectangle 40 (1).png';
import AccessoryImageFourUrl from '@assets/image/photos/Accessory/Rectangle 40 (2).png';
import AccessoryImageFiveUrl from '@assets/image/photos/Accessory/Rectangle 40.png';
import AccessoryItem, { AccessoryItemProp } from './Accessory/AccessoryItem';
import { useMemo } from 'react';
import { contents, descriptions } from '@constants/Home/AccessoryConstants';

export default function Accessory() {
  const memoAccessoryItemList: AccessoryItemProp[] = useMemo(() => {
    return [
      {
        content: contents[0],
        itemElements: [
          { imageUrl: AccessoryImageOneUrl, description: descriptions[0][0] },
          { imageUrl: AccessoryImageTwoUrl, description: descriptions[0][1] },
        ],
      },
      {
        content: contents[1],
        itemElements: [
          {
            imageUrl: AccessoryImageThreeUrl,
            description: descriptions[1][0],
          },
          { imageUrl: AccessoryImageFourUrl, description: descriptions[1][1] },
        ],
      },
      {
        content: contents[2],
        itemElements: [
          { imageUrl: AccessoryImageFiveUrl, description: descriptions[2][0] },
        ],
      },
    ];
  }, []);

  return (
    <AccessoryContainer>
      <SectionName nameString="액세서리" />
      <AccessoryGridContainer>
        {memoAccessoryItemList.map((element) => {
          return (
            <AccessoryItem
              key={element.content}
              content={element.content}
              itemElements={element.itemElements}
            />
          );
        })}
      </AccessoryGridContainer>
    </AccessoryContainer>
  );
}

const AccessoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const AccessoryGridContainer = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 16px;

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 9px;
    row-gap: 13px;
  }
`;
