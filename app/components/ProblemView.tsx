import React from 'react';
import styled from 'styled-components';
import { getDifficultyColor } from '../api/utils';
import Problem from '../model/Problem';
import ProblemStatistics from '../model/ProblemStatistics';
import Tag from './Tag';

interface Props {
  problem: Problem;
  statistics: ProblemStatistics | undefined;
  index: number;
}

export default function ProblemView({ problem, statistics, index }: Props) {
  return (
    <Container
      onClick={() => {
        VsCode.postMessage({
          type: 'PROBLEM',
          payload: problem.contestId ? `${problem.contestId}/${problem.index}` : problem.index,
        });

        console.log(problem);
        console.log(statistics);
      }}
      style={{
        borderLeft: `3px solid ${getDifficultyColor(800, 3500, problem.rating, '#444A54')}`,
      }}
    >
      <Row>
        <Name title={problem.name}>{problem.name}</Name>
        {problem.rating ? (
          <Tag
            text={problem.rating.toString()}
            color={getDifficultyColor(800, 3500, problem.rating)}
          />
        ) : (
          <></>
        )}
      </Row>
      <Row>
        <Solved>{statistics?.solvedCount ? `x${statistics.solvedCount}` : ''}</Solved>
        <TagsContainer>
          <Tags>
            {problem.tags.map((tag, index) => (
              <Tag text={tag} color={'#368DE8'} key={index} adaptiveWidth />
            ))}
          </Tags>
        </TagsContainer>
      </Row>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #4d5564;
  border-width: 1px 0px;
  cursor: pointer;
`;

const Row = styled.div`
  padding: 5px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Name = styled.p`
  width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
  color: white;
  font-size: 14px;
  white-space: nowrap;
`;

const Solved = styled.p`
  width: 20%;
  font-size: 14px;
  color: #368de8;
`;

const TagsContainer = styled.div`
  max-width: 75%;
  overflow-x: scroll;
  padding-bottom: 3px;

  &::-webkit-scrollbar {
    height: 5px;
  }

  ::-webkit-scrollbar-thumb {
    height: 5px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 3px;
  }
`;

const Tags = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: row-reverse;
  overflow: hidden;
  gap: 3px;
`;
