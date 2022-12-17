import React, { useState } from 'react';
import styled from 'styled-components';
import LinkText from './LinkText';

interface Props {
  text: string;
  openText: string;
  children?: JSX.Element[] | JSX.Element;
}

export default function CollapsiblePanel({ text, openText, children }: Props) {
  const [opened, setOpened] = useState(false);

  const toggleOpened = () => setOpened(prev => !prev);

  return (
    <Container>
      <Row>
        <p>{text}</p>
        <LinkText text={openText} onClick={toggleOpened} />
      </Row>
      <Content style={opened ? { maxHeight: '100vh', padding: '15px' } : { maxHeight: '0px' }}>
        {children}
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

const Row = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #4d5564;
  border-width: 1px 0;
  font-size: 14px;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: space-evenly;
  transition: all ease 300ms;
  border-bottom: 1px solid #4d5564;
  overflow: hidden;
`;
