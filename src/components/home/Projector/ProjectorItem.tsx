import styled from 'styled-components';

interface ProjectorItemProp {
  imageUrl: string;
  projectorName: string;
  projectorFeature: string;
}

export default function ProjectorItem({
  imageUrl,
  projectorName,
  projectorFeature,
}: ProjectorItemProp) {
  return (
    <ProjectorItemConatiner>
      <ProjectorItemImage src={imageUrl} />
      <ProjectorItemDetail>
        <ProjectorItemContent>{projectorName}</ProjectorItemContent>
        <ProjectorItemFeature>{projectorFeature}</ProjectorItemFeature>
      </ProjectorItemDetail>
    </ProjectorItemConatiner>
  );
}

const ProjectorItemConatiner = styled.section`
  border-radius: 15px;
  width: 100%;
  position: relative;
`;

const ProjectorItemImage = styled.img`
  /* object-fit: cover; */
  width: 100%;
`;

const ProjectorItemDetail = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  row-gap: 6px;
  color: white;
  left: 37px;
  bottom: 54px;

  @media (max-width: 767px) {
    left: 11px;
    bottom: 16px;
  }
`;

const ProjectorItemContent = styled.span`
  font-weight: bold;
  font-size: 32px;

  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

const ProjectorItemFeature = styled.span`
  font-size: 32px;

  @media (max-width: 767px) {
    font-size: 16px;
  }
`;
