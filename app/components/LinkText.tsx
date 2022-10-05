import React from 'react';
import styled from 'styled-components';

interface Props {
  text: string;
  onClick?: () => void;
}

export default function LinkText({ text, onClick }: Props) {
  return <Text onClick={onClick}>{text}</Text>;
}

const Text = styled.p`
  color: var(--vscode-textLink-foreground);
  color: #368de8;
  text-decoration: underline;
  cursor: pointer;
`;
