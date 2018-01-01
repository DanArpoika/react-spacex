import styled, { css } from 'styled-components'
import CellTitle from './CellTitle'
import LargeText from './LargeText'

const Cell = styled.div `
  position: relative;
  grid-column: span ${props => props.cols};
  padding: 68px 0 40px 24px;
  overflow: hidden;

  &:first-of-type {
    padding-left: 0;

    ${CellTitle} { left: 0; }
  }

  ${props => props.border && css `
    border-${props => props.border}: 2px solid var(--black);
  `}

  ${props => props.rows && css `
    grid-row: span ${props => props.rows};
  `}

  ${props => props.small && css `
    padding: 44px 0 32px 24px;

    &:nth-of-type(n + 4) { border-top: 2px solid var(--black);}
    ${LargeText} { font-size: 1.5rem; }
  `}
`

export default Cell
