import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Container from './Container';
import UnitToggle from './UnitToggle';

const Header = () => (
  <HeaderWrap>
    <Container>
      <Link href="/" prefetch>
        <a style={{ textDecoration: 'none' }}><Title>Unofficial SpaceX</Title></a>
      </Link>
      <UnitToggle />
    </Container>
  </HeaderWrap>
);

const HeaderWrap = styled.header`
  padding: 1.5rem 0;
  ${'' /* position: sticky;
  top: 0;
  background-color: #ffffff;
  z-index: 99; */}
`;

const Title = styled.span`
  font-size: 0.75rem;
  line-height: 1rem;
  font-family: var(--font-condensed);
  letter-spacing: 0.15em;
  color: var(--gray);
  text-transform: uppercase;
`;

export default Header;
