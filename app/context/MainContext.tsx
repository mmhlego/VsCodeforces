import React from 'react';

interface Context {}

export const MainContext = React.createContext<Context>({});

interface Props {
  children: JSX.Element[] | JSX.Element;
}

export const ContextProvider = ({ children }: Props) => {
  const ctx = {};

  return <MainContext.Provider value={ctx}>{children}</MainContext.Provider>;
};
