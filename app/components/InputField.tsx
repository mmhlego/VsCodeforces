import React from 'react';
import styled from 'styled-components';

interface Props {
  label: string;
  placeholder: string;
  onChange: (newVal: string) => void;
}

export default function InputField({ label, placeholder, onChange }: Props) {
  return (
    <Container>
      <Text>{label}</Text>
      <Input placeholder={placeholder} onChange={e => onChange(e.target.value)} />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const Text = styled.p`
  font-size: 14px;
`;

const Input = styled.input`
  width: 100%;
  padding: 0 5px;
  height: 27px;
  border: none;
  border-radius: 4px;
  background-color: #444a54;
  outline: none;
  color: white;
  :focus {
    outline: none;
  }
`;
