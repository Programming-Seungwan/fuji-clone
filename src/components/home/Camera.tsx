import SectionName from '@components/common/Home/SectionName';
import styled from 'styled-components';
import cameraImageOneUrl from '@assets/image/photos/Camera/Rectangle 9.png';
import cameraImageTwoUrl from '@assets/image/photos/Camera/Rectangle 35.png';
import cameraImageThreeUrl from '@assets/image/photos/Camera/Rectangle 36.png';
import {
  descriptions,
  contents,
  prices,
} from '@constants/Home/CameraConstants';
import { useMemo } from 'react';
import CameraItem from './Camera/CameraItem';

interface memoCameraProp {
  imgaeUrl: string;
  content: string;
  description: string;
  price: number;
}

export default function Camera() {
  const memoCameraItemList: memoCameraProp[] = useMemo(() => {
    return [
      {
        imgaeUrl: cameraImageOneUrl,
        content: contents[0],
        description: descriptions[0],
        price: prices[0],
      },
      {
        imgaeUrl: cameraImageTwoUrl,
        content: contents[1],
        description: descriptions[1],
        price: prices[1],
      },
      {
        imgaeUrl: cameraImageThreeUrl,
        content: contents[2],
        description: descriptions[2],
        price: prices[2],
      },
    ];
  }, []);

  return (
    <CameraContainer>
      <SectionName nameString="카메라" />
      <CameraGridContainer>
        {memoCameraItemList.map((element) => {
          return (
            <CameraItem
              imageUrl={element.imgaeUrl}
              content={element.content}
              description={element.description}
              price={element.price}
            />
          );
        })}
      </CameraGridContainer>
    </CameraContainer>
  );
}

const CameraContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CameraGridContainer = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 16px;

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 12px;
    row-gap: 16px;
  }
`;
