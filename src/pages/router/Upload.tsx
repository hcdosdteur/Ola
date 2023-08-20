import React, { useEffect, useRef, useState } from 'react';
import { Container } from '@/component/Container';
import { Header } from '@/pages/main';
import { styled } from '@stitches/react';

import type { Product, Store } from '@/types';

import moment from 'moment';
import axios from 'axios';
import { Btn } from '@/component/Button';
import { useNavigate } from 'react-router-dom';
import { Radio, RadioGroup } from '@/component/Radio';

const m = 2.5;

export const Upload = () => {
  const [price, setPrice] = useState<string>('');
  const [copy, setCopy] = useState<string>('');
  const navigate = useNavigate();
  const [value, setValue] = useState<0 | 1>(0);

  const onchange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setPrice(e.target.value);
  };
  const onchange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setCopy(e.target.value);
  };

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
            <Title>Ad Type</Title>
            <Radio
              name="contact"
              onChange={() => {
                setValue(0);
                console.log(0);
              }}
              value={0}
              defaultChecked
            >
              price + copy (84characters)
            </Radio>
            <Radio
              name="contact"
              onChange={() => {
                setValue(1);
                console.log(1);
              }}
              value={1}
            >
              only copy (112characters)
            </Radio>
          </InputContainer>
          <InputContainer>
            <Title>Create Ad</Title>
            <div>
              <div>Price</div>
              <Input onChange={onchange1} type={'text'} name={'0'} />
            </div>
            <div>
              <div>Copy</div>
              <Input onChange={onchange2} type={'text'} name={'0'} />
            </div>
          </InputContainer>
        </Container>
        <Container
          width="100%"
          css={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            alignItems: 'center',
          }}
        >
          <Title2>Preview</Title2>
          <Pre>picture</Pre>
          <Btn padding="1rem 3rem" onclick={() => console.log(value)}>
            Complete
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

const Input = styled('input', {
  height: '3rem',
  border: 'none',
  borderRadius: '1rem',
  backgroundColor: '$grade1',
  boxShadow: 'inset 0 0 .4rem rgb(0,0,0,0.2)',
  padding: '0 1.5rem',
});

const Pre = styled('div', {
  border: '1px solid black',
  width: `${25 * m}rem`,
  height: `${12.2 * m}rem`,
  borderRadius: '1rem',
  padding: '2.8rem',
});
