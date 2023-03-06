import React, { useState } from 'react';
import styled from 'styled-components';
import ArrowDown from '../assets/arrowDown';

interface Props {
  label: string;
  items: string[];
  onChange: (newVal: string) => void;
}

export default function DropDown({ label, items, onChange }: Props) {
  const [selected, setSelected] = useState(-1);
  const [opened, setOpened] = useState(false);

  const toggleOpened = () => setOpened(prev => !prev);

  return (
    <Container>
      <Text>{label}</Text>
      <Box onClick={toggleOpened}>
        <p>{selected === -1 ? 'Select an item' : items[selected]}</p>
        <ArrowDown />
      </Box>
      <Options style={opened ? { maxHeight: '110px', padding: '2px 5px' } : { maxHeight: '0px' }}>
        {items.map((item, index) => (
          <Option
            key={index}
            onClick={() => {
              setSelected(index);
              onChange(item);
              setOpened(false);
            }}
          >
            {item}
          </Option>
        ))}
      </Options>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  position: relative;
`;

const Text = styled.p`
  font-size: 14px;
  margin-bottom: 3px;
`;

const Box = styled.div`
  width: 100%;
  padding: 0 10px;
  height: 27px;
  border-radius: 4px;
  background-color: #444a54;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const Options = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  overflow-y: scroll;
  top: 52px;
  left: 0px;
  border-radius: 4px;
  /* background-color: #444a54; */
  background-color: #54585f;
  transition: all ease 300ms;
  /* overflow: hidden; */
  z-index: 10;
`;

const Option = styled.p`
  width: 100%;
  cursor: pointer;
  height: 27px;
  text-align: left;
  border-bottom: 1px solid #4d5564;

  :last-child {
    border-bottom: none;
  }
`;
