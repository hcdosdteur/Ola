import React from 'react';
import ReactDOM from 'react-dom/client';
import { globalCss } from '#/stitches.config';

import { Create, Upload, Main } from '@/pages/router';

import '@/assets/fonts/index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { styled } from '@stitches/react';

globalCss({
  ':root': {
    fontSize: '10px',
  },
  '*': {
    fontFamily: 'SFpro',
    fontSize: '1.6rem',
    boxSizing: 'border-box',
    color: '$grade7',
    fontWeight: 600,
    letterSpacing: '-0.01em',
  },
  '*::-webkit-scrollbar': {
    display: 'none',
    width: '.6rem',
  },
  '*::-webkit-scrollbar-thumb': {
    width: '4rem',
    background: '#adadad7b',
    borderRadius: '1rem',
  },
  body: {
    backgroundColor: '$background',
    margin: 0,
  },
  a: {
    width: 'inherit',
    height: 'inherit',
    color: 'inherit',
    fontSize: 'inherit',
    fontWeight: 'inherit',
    textDecoration: 'none',
  },
  p: {
    color: 'inherit',
    fontSize: 'inherit',
    fontWeight: 'inherit',
    margin: 0,
  },
  input: {
    outline: 'none',
  },
})();

const Root = styled('div', {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  overflow: 'auto',
  width: '100vw',
  height: '100vh',
});

const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  width: '100%',
  maxWidth: '140rem',
  padding: '2rem',
  gap: '2rem',
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Root>
      <Wrapper>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/create" element={<Create />} />
            <Route path="/create/upload" element={<Upload />} />
          </Routes>
        </BrowserRouter>
      </Wrapper>
    </Root>
  </React.StrictMode>,
);
