import { styled } from '@stitches/react';
import { Container } from '@/component/Container';

import { ReactComponent as SearchIcon } from '@/assets/icons/search.svg';

const containerCSS = {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '6rem',
};

export const Header: React.FC<{ isMain?: boolean }> = ({ isMain = true }) => {
  return (
    <Container width="100%" css={containerCSS}>
      <Logo>
        <H>H</H>OLA
      </Logo>
      {isMain ? (
        <SearchBar>
          <Search placeholder="Find your ads" />
          <SearchIcon style={{ position: 'absolute', right: 20, bottom: 9 }} />
        </SearchBar>
      ) : (
        <div></div>
      )}
    </Container>
  );
};

const Logo = styled('div', {
  fontWeight: 600,
  fontSize: '4rem',
});

const H = styled('span', {
  opacity: 0.4,
  fontSize: 'inherit',
  fontWeight: 'inherit',
});

const SearchBar = styled('div', {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  maxWidth: '40rem',
  border: '.1rem solid black',
  padding: '0 3rem',
  borderRadius: '3rem',
});

const Search = styled('input', {
  width: '100%',
  border: 'none',
  padding: 0,
  maxWidth: '40rem',
  fontSize: '1.8rem',
  lineHeight: `${1.8 * 1.5}rem`,
});
