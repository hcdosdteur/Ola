import { styled } from '@stitches/react';
import { ReactElement } from 'react';

export const Btn: React.FC<{
  padding?: string;
  onclick?: () => void;
  children: React.ReactElement | string;
}> = ({ onclick, padding, children }) => {
  return (
    <Button onClick={onclick} css={{ padding: `${padding}` }}>
      {children}
    </Button>
  );
};

const Button = styled('button', {
  backgroundColor: '$grade6',
  borderRadius: '3rem',
  fontSize: '2rem',
  color: '$grade1',
  padding: '0 1.2rem',
  cursor: 'pointer',
});
