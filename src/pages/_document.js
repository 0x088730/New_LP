import { Html, Head, Main, NextScript } from 'next/document'
import 'tailwindcss/tailwind.css';
import "~/styles/global.css"

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
