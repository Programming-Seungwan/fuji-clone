import styled from 'styled-components';
import HeroCarousel from '@components/home/HeroCarousel';
import NewProducts from '@components/home/NewProduct';
import Promotion from '@components/home/Promotion/Promotion';
import Lens from '@components/home/Lens';
import Camera from '@components/home/Camera';
import Accessory from '@components/home/Accessory';
import Projector from '@components/home/Projector';
import OriginalGoods from '@components/home/OriginalGoods';

export default function Home() {
  return (
    <HomeContainer>
      <HeroCarousel />
      <NewProducts />
      <Promotion />
      <Lens />
      <Camera />
      <Accessory />
      {/* <Projector /> */}
      {/* <OriginalGoods /> */}
    </HomeContainer>
  );
}

const HomeContainer = styled.section`
  flex-grow: 1;
`;
