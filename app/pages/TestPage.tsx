import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CollapsiblePanel from '../components/CollapsiblePanel';
import DropDown from '../components/DropDown';
import InputField from '../components/InputField';
import LinkText from '../components/LinkText';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';
import SecondaryLinkText from '../components/SecondaryLinkText';
import Title from '../components/Title';

export default function TestPage() {
  const navigate = useNavigate();

  const [text, setText] = useState('');

  return (
    <Container>
      <Title text="Title" />

      <LinkText
        text="Link Text"
        onClick={() => {
          console.log('Filter');
        }}
      />

      <SecondaryLinkText
        text="Secondary Link Text"
        onClick={() => {
          console.log('Filter');
        }}
      />

      <PrimaryButton text="Primary Button" onClick={() => navigate('/contests')} />

      <SecondaryButton text="Secondary Button" />

      <CollapsiblePanel text={'List of contests:'} openText="Filter">
        <PrimaryButton text="Primary Button 1" />
        <PrimaryButton text="Primary Button 2" />
        <PrimaryButton text="Primary Button 3" />
      </CollapsiblePanel>

      <InputField label="Name" placeholder="..." onChange={setText} />

      <DropDown label="Type" items={['ICPC', 'IOI', 'CF']} onChange={console.log} />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
