import styled, {css} from 'styled-components'
import Grid from './Grid';

const Item = styled.div `
  grid-column: span ${props => props.cols};
  ${props => props.rows && css `
    grid-row: span ${props => props.rows};
  `}
  margin-bottom: 2rem;
  font-size: 0.875rem;
  font-weight: 500;

  > div { line-height: 1.5rem; }

  ${props => props.start && css `
    grid-column ${props.start + ' / span ' + props.cols};
  `}

  ${Grid} {
    border-top: 0;
    padding-top: 0;
  }

  h3 {
    line-height: 1;
    margin-bottom: 1rem;
  }

  p {
    margin: 0;
  }
`

export default Item
