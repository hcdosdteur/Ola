import { useEffect, useRef, useState } from 'react';
import { Container } from '@/component/Container';
import { Header } from '@/pages/main';
import { styled } from '@stitches/react';

import type { Product, Store } from '@/types';

import moment from 'moment';
import axios from 'axios';
import { Btn } from '@/component/Button';
import { useNavigate } from 'react-router-dom';

export const Create = () => {
  const [store, setStore] = useState<Store[] | undefined>();
  const [product, setProduct] = useState<Product[] | undefined>();

  const name = useRef(null);

  const navigate = useNavigate();

  const getStore = async () => {
    try {
      const res = await axios.get('http://localhost:5000/store');
      console.log(res.data);
      setStore(res.data);
      const { data } = await axios.get('http://localhost:5000/product');
      console.log(data);
      setProduct(data);
    } catch (err) {
      console.log('Error >>', err);
    }
  };

  useEffect(() => {
    getStore();
  }, []);
  return (
    <>
      <Header isMain={false}></Header>
      <Wrapper>
        <Container
          css={{
            display: 'flex',
            flexDirection: 'column',
            gap: '4rem',
            minWidth: '39.5rem',
          }}
        >
          <InputContainer>
            <Title>ads name</Title>
            <Input ref={name} type={'text'} />
          </InputContainer>
          <InputContainer>
            <Title>Start day</Title>
            <Time>
              <Input
                css={{ width: '18rem' }}
                type={'text'}
                value={moment().format('YYYY-MM-DD')}
                disabled
              />
              <Input
                css={{ width: '13rem' }}
                type={'text'}
                value={moment().format('HH:mm:ss')}
                disabled
              />
            </Time>
          </InputContainer>
          <InputContainer>
            <Title>Finish day</Title>
            <Time>
              <Input css={{ width: '15rem' }} type={'date'} />
              <Input css={{ width: '15rem' }} type={'time'} />
            </Time>
          </InputContainer>
          <InputContainer>
            <Title>Choose store</Title>
            <Select name="order" form="myForm">
              <Option value="none">=== Store ===</Option>
              {store &&
                store.map((item, idx) => (
                  <Option key={idx} value="americano">
                    {item.name}
                  </Option>
                ))}
            </Select>
          </InputContainer>
          <InputContainer>
            <Title>Choose a product to advertise</Title>
            <Select name="order" form="myForm">
              <Option value="none">=== Product ===</Option>
              {product &&
                product.map((item, idx) => (
                  <Option key={idx} value="americano">
                    {item.name}
                  </Option>
                ))}
            </Select>
          </InputContainer>
          <Btn css={{ marginTop: '1rem' }}>Submit</Btn>
        </Container>
        <Container width="100%">
          <Title2>Select an A/B test (comparison) store</Title2>
          <Compare>
            <Container
              css={{
                border: '.2rem solid $grade3',
                width: '30rem',
                height: '30rem',
              }}
            >
              <div>Empty</div>
            </Container>
            <div>VS</div>
            <Container
              css={{
                border: '.2rem solid $grade3',
                width: '30rem',
                height: '30rem',
              }}
            >
              <div></div>
            </Container>
          </Compare>
          <Btn padding="1rem 3rem" onclick={() => navigate('/create/upload')}>
            Next
          </Btn>
        </Container>
      </Wrapper>
    </>
  );
};

const Wrapper = styled('div', {
  position: 'relative',
  display: 'flex',
  gap: '2rem',
});

const Title = styled('div', {
  fontSize: '2.6rem',
});
const Title2 = styled('div', {
  fontSize: '3rem',
});

const InputContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
});

const Time = styled('div', {
  display: 'flex',
  gap: '1rem',
});

const Input = styled('input', {
  height: '3rem',
  border: 'none',
  borderRadius: '1rem',
  backgroundColor: '$grade1',
  boxShadow: 'inset 0 0 .4rem rgb(0,0,0,0.2)',
  padding: '0 1.5rem',
});

const Select = styled('select', {
  height: '3rem',
  border: 'none',
  borderRadius: '1rem',
  boxShadow: 'inset 0 0 .4rem rgb(0,0,0,0.2)',
  padding: '0 1.5rem',
});

const Option = styled('option', {
  transition: 'all .2s ease-in-out',
  backgroundColor: '$grade6',
  color: '$grade1',
});

const Compare = styled('div', {
  display: 'flex',
});
