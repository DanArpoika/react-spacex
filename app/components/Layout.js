import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Container from './Container';
import UnitToggle from './UnitToggle';

const Layout = ({ units, children, toggleUnit }) => (
  <div>

    <HeaderWrap>
      <Container>
        <FlexBox>
          <Link href="/" prefetch>
            <a style={{ textDecoration: 'none' }}><Title>Unofficial SpaceX</Title></a>
          </Link>
          <UnitToggle units={units} toggleUnit={toggleUnit} />
        </FlexBox>
      </Container>
    </HeaderWrap>

    {children}
  </div>
);

export default Layout;

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

const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
