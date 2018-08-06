import styled, { css } from 'styled-components';

const CellRow = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 0;
  border-bottom: 2px solid var(--black);

  &:last-of-type {
    border-bottom: 0;
  }

  ${props => props.templateRows && css`
    grid-template-rows: repeat(2, 1fr);
    ${''}
  `}
`;

export default CellRow;
