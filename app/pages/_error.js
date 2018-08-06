import React from 'react';
import styled from 'styled-components';
import Container from '../components/Container';
import PageTitle from '../components/PageTitle';

export default class Error extends React.Component {

  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null; // eslint-disable-line no-nested-ternary, max-len

    return { statusCode };
  }

  render() {
    return (
      <main>
        <ErrPage>
          <Container>
            <PageTitle style={{ fontSize: '8rem', margin: '0 auto 2rem auto', lineHeight: 1 }}>
              {this.props.statusCode}
            </PageTitle>
            <h3 style={{ marginBottom: '68px' }}>Houston, we have a problem</h3>
          </Container>
        </ErrPage>
      </main>
    );
  }
}

const ErrPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 68px);
  text-align: center;
`;
