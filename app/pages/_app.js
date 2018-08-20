import App, { Container } from 'next/app';
import React from 'react';
import Layout from '../components/Layout';

export default class MyApp extends App {

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  constructor(props) {
    super(props);

    this.state = {
      units: 'us',
    };
  }

  componentDidMount() {
    if (window.localStorage.getItem('units')) {
      this.setState({ // eslint-disable-line react/no-did-mount-set-state
        units: window.localStorage.getItem('units'),
      });
    }
  }

  toggleUnit = (e) => {
    const val = e.target.checked;
    const unit = val === true ? 'metric' : 'us';

    this.setState({
      units: unit,
    });

    window.localStorage.setItem('units', unit);
  };

  render() {
    const { Component, pageProps } = this.props;
    const { units } = this.state;

    return (
      <Container>
        <Layout units={units} toggleUnit={this.toggleUnit}>
          <Component {...pageProps} units={units} />
        </Layout>
      </Container>
    );
  }
}
