import React from 'react';
import { RouterProvider } from 'react-router';
import styled from 'styled-components';
import { ContextProvider } from './context/MainContext';
import { router } from './routes/Routes';

export const App = () => {
  return (
    <Container>
      <ContextProvider>
        <RouterProvider router={router} />
      </ContextProvider>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 -20px;
`;
