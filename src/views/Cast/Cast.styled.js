import styled from 'styled-components';

export const Wrapper = styled.ul`
  display: grid;
  max-width: 1140px;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-gap: 12px;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`;

export const CastItem = styled.li`
  padding: 8px;
  border-radius: 16px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
export const Photo = styled.img`
  height: 225px;
  width: 150px;
  margin-left: auto;
  margin-right: auto;
`;
