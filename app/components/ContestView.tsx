/* eslint-disable curly */
import React from 'react';
import Contest from '../model/Contest';
import styled from 'styled-components';
import Tag from './Tag';
import { getDifficultyColor, getTimeString } from '../api/utils';

interface Props {
  contest: Contest;
  index: number;
}

export default function ContestView({ contest, index }: Props) {
  const getContestTime = () => {
    if (contest.relativeTimeSeconds === undefined) return '';
    if (contest.relativeTimeSeconds < 0)
      return `Until: ${getTimeString(contest.relativeTimeSeconds)}`;
    if (contest.relativeTimeSeconds > contest.durationSeconds) return 'Finished';
    return `Running: ${getTimeString(contest.relativeTimeSeconds)}`;
  };

  if (contest.difficulty) console.log(contest.difficulty);

  return (
    <Container
      onClick={() => {
        console.log(contest);
      }}
      style={{ borderLeft: `3px solid ${getDifficultyColor(1, 5, contest.difficulty)}` }}
    >
      <Row>
        <Name title={contest.name}>{contest.name}</Name>
        <Tag text={contest.type} />
      </Row>
      <Row>
        <p>{getTimeString(contest.durationSeconds)}</p>
        <p>{getContestTime()}</p>
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
  white-space: nowrap;
`;
