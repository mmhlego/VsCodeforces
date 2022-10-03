import React from 'react';
import Contest from '../model/Contest';
import styled from 'styled-components';

interface Props {
  contest: Contest;
  index: number;
}

export default function ContestView({ contest, index }: Props) {
  return (
    <Container>
      <p>{contest.name}</p>
    </Container>
  );
}

const Container = styled.div``;
