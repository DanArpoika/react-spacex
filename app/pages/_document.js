import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, injectGlobal } from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render () {
    return (
      <html>
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
    )
  }
}

injectGlobal `
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

  img { max-width: 100%; }
`;
