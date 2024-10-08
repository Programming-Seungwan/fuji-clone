import styled from 'styled-components';
import HeroCarouselImageURL from '@assets/image/photos/HeroCarousel/Rectangle 2.png';

export default function HeroCarousel() {
  return <HeroCarouselResponsiveImage />;
}

const HeroCarouselResponsiveImage = styled.img`
  content: url(${HeroCarouselImageURL});
  width: 100%;
  height: auto;
`;
