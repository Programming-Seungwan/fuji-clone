import styled from 'styled-components';

export interface originalGoodsItemProp {
  imageUrl: string;
  content: string;
  description: string;
}
export default function OriginalGoodsItem({
  imageUrl,
  content,
  description,
}: originalGoodsItemProp) {
  return (
    <OriginalGoodsItemContainer>
      <OriginalGoodsItemImage src={imageUrl} />
      <OriginalGoodsItemDetail>
        <OriginalGoodsItemContent>{content}</OriginalGoodsItemContent>
        <OriginalGoodsItemDescription>
          {description}
        </OriginalGoodsItemDescription>
      </OriginalGoodsItemDetail>
    </OriginalGoodsItemContainer>
  );
}

const OriginalGoodsItemContainer = styled.section`
  position: relative;
`;

const OriginalGoodsItemImage = styled.img`
  width: 100%;
`;

const OriginalGoodsItemDetail = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  align-items: center;

  position: absolute;
  color: white;
  left: 12px;
  bottom: 12px;

  @media (max-width: 767px) {
    left: 18px;
  }
`;

const OriginalGoodsItemContent = styled.span`
  font-weight: bold;
  font-size: 16px;
`;

const OriginalGoodsItemDescription = styled.span`
  font-size: 12px;
`;
