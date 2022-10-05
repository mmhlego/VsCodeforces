import React from 'react';

interface Props {
  text: string;
}

export default function Title({ text }: Props) {
  return <h2>{text}</h2>;
}
