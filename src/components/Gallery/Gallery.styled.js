import styled from 'styled-components';

export const Box = styled.div`
  height: 420px;
  color: #2a363b;
  border-radius: 8px;
  margin: 24px auto;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;
export const Wrapper = styled.ul`
  display: grid;
  max-width: 1140px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 12px;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`;

export const Text = styled.p`
  font-size: 16px;
  margin: 0 auto 12px auto;
  padding: 4px;
  text-align: center;
`;

export const Poster = styled.img`
  width: 216px;
  margin-left: auto;
  margin-right: auto;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;
