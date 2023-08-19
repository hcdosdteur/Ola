import { styled } from '@stitches/react';
import { Container } from '@/component/Container';

export const Result = () => {
  return (
    <Container width="100%">
      <Tmp></Tmp>
    </Container>
  );
};

const Tmp = styled('div', {
  height: '27rem',
});
