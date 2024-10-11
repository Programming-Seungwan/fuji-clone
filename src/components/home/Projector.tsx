import styled from 'styled-components';
import SectionName from '@components/common/Home/SectionName';
import ProjectorImageOneUrl from '@assets/image/photos/Projector/Rectangle 45.png';
import ProjectorImageTwoUrl from '@assets/image/photos/Projector/Rectangle 46.png';
import {
  projectorFeatureList,
  projectorNameList,
} from '@constants/Home/ProjectorConstants';
import { useMemo } from 'react';
import ProjectorItem from './Projector/ProjectorItem';

interface projectorItemProp {
  imageUrl: string;
  projectorName: string;
  projectorFeature: string;
}

export default function Projector() {
  const memoProjectorItemList: projectorItemProp[] = useMemo(() => {
    return [
      {
        imageUrl: ProjectorImageOneUrl,
        projectorName: projectorNameList[0],
        projectorFeature: projectorFeatureList[0],
      },
      {
        imageUrl: ProjectorImageTwoUrl,
        projectorName: projectorNameList[1],
        projectorFeature: projectorFeatureList[1],
      },
    ];
  }, []);

  return (
    <ProjectorContainer>
      <SectionName nameString="프로젝터" />
      <ProjectorGridContainer>
        {memoProjectorItemList.map((element, idx) => {
          return (
            <ProjectorItem
              key={element.projectorName}
              imageUrl={element.imageUrl}
              projectorName={element.projectorName}
              projectorFeature={element.projectorFeature}
            />
          );
        })}
      </ProjectorGridContainer>
    </ProjectorContainer>
  );
}

const ProjectorContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProjectorGridContainer = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;

  @media (max-width: 767px) {
    column-gap: 9px;
  }
`;
