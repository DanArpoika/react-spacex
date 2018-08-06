import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet, injectGlobal } from 'styled-components';

export default class MyDocument extends Document {

  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <title>SpaceX Launch Data</title>
          <link href="https://fonts.googleapis.com/css?family=Oswald:300,400" rel="stylesheet" />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

/* eslint-disable no-unused-expressions */
injectGlobal`
  :root {
    --black: #1e2327;
    --gray: #9b9c9d;
    --red: #ed0f0f;
    --green: #13a941;
    --inactive: #e2e2e2;
  }

  * { box-sizing: border-box; }

  body {
    margin: 0;
    min-height: 100vh;
    font-family: "helvetica neue", helvetica, arial, sans-serif;
    color: var(--black);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "oswald", sans-serif;
    font-weight: 400;
  }

  h3 {
    font-size: 0.75rem;
    letter-spacing: 0.15em;
    color: var(--gray);
    text-transform: uppercase;
    margin: 0;
  }

  img { max-width: 100%; }

  p {
    color: rgba(30,35,39, 0.85);
    line-height: 1.5rem;
  }

  a {
    color: currentColor;
    cursor: pointer !important;
  }
`;
