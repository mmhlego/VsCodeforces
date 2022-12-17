import React from 'react';
import styled from 'styled-components';

export default function Loading() {
  return <Container>Loading...</Container>;
}

const Container = styled.button`
  width: 100%;
  height: 30px;
  background: transparent;
  text-align: center;
  color: white;
  border: none;
`;
