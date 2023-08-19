import { Header, Ola, Result } from '@/pages/main';
import { styled } from '@stitches/react';

export const Main = () => {
  return (
    <>
      <Header />
      <Ola />
      <Bottom>
        <Result></Result>
        <Result></Result>
      </Bottom>
    </>
  );
};

const Bottom = styled('div', {
  display: 'grid',
  width: '100%',
  gridTemplateColumns: '1fr 1fr',
  gridColumnGap: '2rem',
});
