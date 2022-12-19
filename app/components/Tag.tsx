/* eslint-disable curly */
import React from 'react';
import styled from 'styled-components';

interface Props {
  text: string;
  adaptiveWidth?: boolean;
  color?: string;
}

export default function Tag({ text, adaptiveWidth = false, color }: Props) {
  const getBackground = () => {
    if (text === 'IOI') return '#C27010';
    if (text === 'CF') return '#106DC2';
    if (text === 'ICPC') return '#1EC210';
    return '#444A54';
  };

  return (
    <Container
      title={text}
      style={{
        background: color ? color : getBackground(),
        minWidth: adaptiveWidth ? '0px' : '50px',
      }}
    >
      {text}
    </Container>
  );
}

const Container = styled.p`
  padding: 0px 4px;
  min-width: 50px;
  text-align: center;
  margin-left: 3px;
  border-radius: 10px;
  color: white;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
