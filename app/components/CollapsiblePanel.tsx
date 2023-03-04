import React, { ReactNode, useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import ArrowLeft from '../assets/ArrowLeft';
import LinkText from './LinkText';

interface Props {
  hasBackButton?: boolean;
  text: string;
  openText: string;
  style?: React.CSSProperties;
  children?: ReactNode;
}

export default function CollapsiblePanel({
  hasBackButton = false,
  text,
  openText,
  style,
  children,
}: Props) {
  const [opened, setOpened] = useState(false);

  const toggleOpened = () => setOpened(prev => !prev);

  const navigate = useNavigate();

  return (
    <Container style={style}>
      <Row>
        <Title>
          {hasBackButton && <ArrowLeft onClick={() => navigate(-1)} />}
          {text}
        </Title>
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
  background-color: #21252b;
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

const Title = styled.div`
  font-weight: 600;
  font-size: medium;
  display: flex;
  align-items: center;
  gap: 3px;
`;

const Content = styled.div`
  width: 100%;
  background-color: '#21252b';
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: space-evenly;
  transition: all ease 300ms;
  border-bottom: 1px solid #4d5564;
  overflow: hidden;
`;
