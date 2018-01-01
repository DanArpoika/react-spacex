import styled from 'styled-components'

const CellRow = styled.div `
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 20px;
  border-bottom: 2px solid var(--black);

  &:last-of-type {
    border-bottom: 0;
  }
`

export default CellRow
