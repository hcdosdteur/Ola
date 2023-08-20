import { styled } from '@stitches/react';
import { Container } from '@/component/Container';
import { Btn } from '@/component/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const mainSubject = ['On/Off', 'Name', 'Product', 'Duration', 'revenue'];

export const Ola = () => {
  const [data, setData] = useState<
    {
      copy: string;
      duration: string[];
      name: string;
      on: boolean;
      product: string;
      revenue: null;
      store: string;
      versus: string;
      _id: string;
    }[]
  >([]);

  const getOlaData = async () => {
    try {
      const res = await axios.get('http://localhost:5000/ola');
      console.log(res.data[0]);
      setData(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getOlaData();
  }, []);

  return (
    <Container width="100%" height="45rem" css={{ minHeight: '30rem' }}>
      <Header>
        <Title>One Line Ads</Title>
        <Btns>
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
        {data.map((item, idx) => (
          <Subjectdata>
            <Obj key={idx}>
              {item.on ? (
                <input type="checkbox" checked />
              ) : (
                <input type="checkbox" />
              )}
            </Obj>
            <Obj key={idx}>{item.name}</Obj>
            <Obj key={idx}>{item.on ? item.product : '-'}</Obj>
            <Obj key={idx}>{item.on ? item.duration.join(' ~ ') : '-'}</Obj>
            <Obj key={idx}>{item.on ? `${item.revenue}%` : '-'}</Obj>
          </Subjectdata>
        ))}
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
const Subjectdata = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
});

const Subject = styled('div', {
  padding: '1rem',
  color: '$grade5',
});

const Obj = styled('div', {
  padding: '1rem',
  color: '$grade7',
  textAlign: 'center',
});
