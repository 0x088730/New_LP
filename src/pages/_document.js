import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Add viewport meta tag */}
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          {/* You can add other meta tags, link tags, or script tags here */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
