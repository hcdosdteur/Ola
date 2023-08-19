import { styled } from '@stitches/react';
import { Container } from '@/component/Container';
import { Btn } from '@/component/Button';
import { Link } from 'react-router-dom';

const mainSubject = ['On/Off', 'Name', 'Product', 'Duration', 'revenue'];

export const Ola = () => {
  return (
    <Container width="100%" height="45rem" css={{ minHeight: '30rem' }}>
      <Header>
        <Title>One Line Ads</Title>
        <Btns>
          <Btn>Edit</Btn>
          <Btn>
            <Link to="/create">Create Ad</Link>
          </Btn>
        </Btns>
      </Header>
      <Contents>
        <Subjects>
          {mainSubject.map((item, idx) => (
            <Subject key={idx}>{item}</Subject>
          ))}
        </Subjects>
      </Contents>
    </Container>
  );
};

const Header = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '2rem',
});

const Title = styled('div', {
  fontSize: '3rem',
  fontWeight: 500,
});

const Btns = styled('div', {
  display: 'flex',
  gap: '2.2rem',
});

const Contents = styled('div', {
  width: '100%',
});

const Subjects = styled('div', {
  display: 'flex',
  justifyContent: 'space-around',
  borderTop: '.1rem solid $grade3',
  borderBottom: '.1rem solid $grade3',
});

const Subject = styled('div', {
  padding: '1rem',
  color: '$grade5',
});
