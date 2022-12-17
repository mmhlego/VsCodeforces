import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SecondaryButton from '../components/SecondaryButton';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>Welcome '{'Name'}'</Title>
      <SecondaryButton text="Contests" onClick={() => navigate('/contests')} />
      <SecondaryButton text="Problemset" onClick={() => navigate('/problems')} />
      <SecondaryButton text="My Profile" onClick={() => navigate('/profile')} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 15px;
  gap: 20px;
`;

const Title = styled.p`
  width: 100%;
  font-size: 30px;
  font-weight: 200;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 15px;
`;
