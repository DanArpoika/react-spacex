import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 1.5rem;
  border-top: 2px solid var(--black);
  padding-top: 3rem;
`;

export default Grid;
