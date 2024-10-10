import styled from 'styled-components';
import heartSVGUrl from '@assets/image/photos/Camera/heart.svg';

interface cameraItemProp {
  imageUrl: string;
  content: string;
  description: string;
  price: number;
}

export default function CameraItem({
  imageUrl,
  content,
  description,
  price,
}: cameraItemProp) {
  return (
    <CameraItemContainer>
      <img src={heartSVGUrl} alt="this is heart svg image" />
      <CameraItemImage src={imageUrl} alt="this is camera item image" />
      <CameraItemContent>{content}</CameraItemContent>
      <CameraItemDescription>{description}</CameraItemDescription>
      <CameraItemPrice>{price.toLocaleString()}원</CameraItemPrice>
    </CameraItemContainer>
  );
}

const CameraItemContainer = styled.section`
  padding-top: 25px;
  padding-bottom: 33px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  color: #6d6d6d;

  font-size: 14px;

  @media (max-width: 767px) {
    font-size: 8px;
  }
`;

const CameraItemImage = styled.img`
  width: 100%;
`;

const CameraItemContent = styled.div`
  font-weight: bold;
  color: #333333;
  font-size: 16px;

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

const CameraItemDescription = styled.div`
  margin-top: 11px;
  margin-bottom: 5px;
`;

const CameraItemPrice = styled.div``;
