import React from 'react';

type Props = {
  onClick?: () => void;
};

export default function ArrowLeft({ onClick }: Props) {
  return (
    <svg
      onClick={onClick}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ cursor: onClick ? 'pointer' : 'default', display: 'block' }}
    >
      <path
        d="M15 19.92L8.48 13.4c-.77-.77-.77-2.03 0-2.8L15 4.08"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
    </svg>
  );
}
