import styled from 'styled-components';
import SectionName from '@components/common/Home/SectionName';
import LensItemOneURL from '@assets/image/photos/Lens/Rectangle 37.png';
import LensItemTwoURL from '@assets/image/photos/Lens/Rectangle 38.png';
import LensItemThreeURL from '@assets/image/photos/Lens/Rectangle 39.png';
import { useMemo } from 'react';
import { contents, descriptions } from '@constants/Home/LensConstants';
import LensItem from './Lens/LensItem';

interface memoLensItemProp {
  imageUrlString: string;
  descriptionString: string;
  contentString: string;
}

export default function Lens() {
  const memoLensItem: memoLensItemProp[] = useMemo(() => {
    return [
      {
        imageUrlString: LensItemOneURL,
        descriptionString: descriptions[0],
        contentString: contents[0],
      },
      {
        imageUrlString: LensItemTwoURL,
        descriptionString: descriptions[1],
        contentString: contents[1],
      },
      {
        imageUrlString: LensItemThreeURL,
        descriptionString: descriptions[2],
        contentString: contents[2],
      },
    ];
  }, []);

  return (
    <LensContainer>
      <SectionName nameString="렌즈" />
      <LensGridContainer>
        {memoLensItem.map((element) => {
          return (
            <LensItem
              imageUrl={element.imageUrlString}
              descriptionString={element.descriptionString}
              contentString={element.contentString}
            />
          );
        })}
      </LensGridContainer>
    </LensContainer>
  );
}

const LensContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LensGridContainer = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 16px;

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 10px;
  }
`;
