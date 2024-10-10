import NewProductImageURL from '@assets/image/photos/NewProducts/Rectangle 4.png';
import RightChaveronSVGURL from '@assets/image/photos/NewProducts/rightChaveron.svg';
import styled from 'styled-components';
import SectionName from '@components/common/Home/SectionName';

export default function NewProduct() {
  return (
    <NewProductContainer>
      <SectionName nameString="신제품" />
      <MainNewProductArea>
        <MainNewProductImage />
        <MainNewProductDescription>
          <span>X-T5</span>
          <div>
            5세대 디바이스의 압도적인 해상도,
            <br /> 사진 촬영의 본질을 일깨우는 다어얼 조작,
            <br /> 기동성이 뛰어난 컴팩트 바디.
            <br /> 오롯이 사진에 집중한 카메라, X-T5
          </div>
          <button>자세히 보기</button>
        </MainNewProductDescription>
        <NewProductRightChaveron />
      </MainNewProductArea>
    </NewProductContainer>
  );
}

const NewProductContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainNewProductArea = styled.div`
  width: 80%;
  display: flex;
  position: relative;
  @media (max-width: 767px) {
    flex-direction: column;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const MainNewProductImage = styled.img`
  content: url(${NewProductImageURL});
`;

const MainNewProductDescription = styled.p`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: ${(props) => props.theme.colors.primary};

  span {
    font-weight: bold;
  }
  div {
    line-height: 1.5;
  }
  button {
    background-color: ${(props) => props.theme.colors.themeBlue};
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 767px) {
    padding-top: 22px;
    padding-left: 17px;
    row-gap: 15px;
    span {
      font-size: 22px;
    }
    div {
      font-size: 10px;
    }
    button {
      width: 69px;
      height: 18px;
    }
  }

  @media (min-width: 768px) {
    padding-top: 37px;
    padding-left: 26px;
    row-gap: 28px;
    span {
      font-size: 40px;
    }
    div {
      font-size: 20px;
    }
    button {
      width: 105px;
      height: 31px;
    }
  }
`;

const NewProductRightChaveron = styled.img`
  content: url(${RightChaveronSVGURL});
  position: absolute;
  &:hover {
    cursor: pointer;
  }

  @media (max-width: 767px) {
    right: 9px;
    top: 100px;
  }

  @media (min-width: 768px) {
    right: 12px;
    top: 50%;
  }
`;
