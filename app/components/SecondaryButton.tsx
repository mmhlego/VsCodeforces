import React from 'react';
import styled from 'styled-components';

interface Props {
  text: string;
  onClick?: () => void;
}

export default function SecondaryButton({ text, onClick }: Props) {
  return <Button onClick={onClick}>{text}</Button>;
}

const Button = styled.button`
  width: 100%;
  height: 28px;
  border: none;
  border-radius: 2px;
  margin-bottom: 13px;
  background-color: var(--vscode-button-background);
  color: var(--vscode-button-secondaryForeground);
`;