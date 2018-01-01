import styled from 'styled-components'

const LargeText = styled.div `
  font-size: 3.5rem;
  font-weight: 200;
  letter-spacing: -0.015em;
  line-height: 1;
  white-space: ${props => props.noWrap ? 'nowrap' : 'normal'};
`

export default LargeText
