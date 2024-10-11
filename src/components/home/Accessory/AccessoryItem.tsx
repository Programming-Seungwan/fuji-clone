import styled from 'styled-components';

interface AccessoryItemElementProp {
  imageUrl: string;
  description: string;
}

export interface AccessoryItemProp {
  content: string;
  itemElements: AccessoryItemElementProp[];
}

export default function AccessoryItem({
  content,
  itemElements,
}: AccessoryItemProp) {
  return (
    <AccessoryItemContainer>
      <AccessoryItemContainerSpan>{content}</AccessoryItemContainerSpan>
      {itemElements.map((element, idx) => (
        <AccessoryItemElement
          key={idx}
          imageUrl={element.imageUrl}
          description={element.description}
        />
      ))}
    </AccessoryItemContainer>
  );
}

const AccessoryItemContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  padding-top: 14px;

  @media (max-width: 767px) {
    padding-top: 9px;
  }
`;

const AccessoryItemContainerSpan = styled.span`
  color: #333333;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 14px;
  @media (max-width: 767px) {
    font-size: 10px;
    margin-bottom: 9px;
  }
`;

function AccessoryItemElement({
  imageUrl,
  description,
}: AccessoryItemElementProp) {
  return (
    <AccessoryItemElementContainer>
      <AccessoryItemElementImage src={imageUrl} />
      <AccessoryItemElementDescription>
        {description}
      </AccessoryItemElementDescription>
    </AccessoryItemElementContainer>
  );
}

const AccessoryItemElementContainer = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AccessoryItemElementImage = styled.img`
  width: 100%;
`;

const AccessoryItemElementDescription = styled.span`
  color: #333333;
  font-size: 12px;
  margin: 6.6px 0px;

  @media (max-width: 767px) {
    font-size: 6px;
  }
`;
