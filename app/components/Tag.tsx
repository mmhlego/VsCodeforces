/* eslint-disable curly */
import React from 'react';
import styled from 'styled-components';

interface Props {
  text: string;
}

export default function Tag({ text }: Props) {
  const getBackground = () => {
    if (text === 'IOI') return '#C27010';
    if (text === 'CF') return '#106DC2';
    if (text === 'ICPC') return '#1EC210';
    return '#444A54';
  };

  return <Container style={{ background: getBackground() }}>{text}</Container>;
}

const Container = styled.p`
  padding: 0px 3px;
  min-width: 50px;
  text-align: center;
  margin-left: 3px;
  border-radius: 10px;
  color: white;
`;
