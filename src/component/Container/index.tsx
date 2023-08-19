import { CSS, styled } from '@stitches/react';

export const Container: React.FC<{
  width?: string;
  height?: string;
  padding?: string;
  css?: CSS;
  children: React.ReactElement | React.ReactElement[];
}> = ({ width, height, padding, css, children }) => {
  return (
    <Wrapper
      css={Object.assign(
        {
          width: `${width}`,
          height: `${height}`,
          padding: `${padding}`,
        },
        css,
      )}
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  position: 'relative',
  backgroundColor: '$grade1',
  padding: '2.8rem',
  borderRadius: '1rem',
  boxShadow: 'inset 0 0 5rem rgb(0,0,0,0.05)',
});
