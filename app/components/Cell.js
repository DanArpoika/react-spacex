import styled, { css } from 'styled-components'
import CellTitle from './CellTitle'

const Cell = styled.div `
  position: relative;
  grid-column: span ${props => props.cols};
  padding: 40px 0 40px 16px;

  &:first-of-type {
    padding-left: 0;

    ${CellTitle} { left: 0; }
  }

  ${props => props.border && css `
    border-${props => props.border}: 2px solid var(--black);
  `}
`

export default Cell
