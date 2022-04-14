import { Html, Head, Main, NextScript } from "next/document"

export default function Document () {
  return (
    <Html>
      <Head>
        <title>FoxCoin</title>
        <meta name="title" content="FoxCoin"/>
        <meta name="description" content="Fox Coin is a dapp created for ethereum 101 course of cadena.dev"/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://foxcoin.vercel.app/"/>
        <meta property="og:title" content="FoxCoin"/>
        <meta property="og:description" content="Fox Coin is a dapp created for ethereum 101 course of cadena.dev"/>
        <meta property="og:image" content="https://foxcoin.vercel.app/assets/LandingPage.png"/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://foxcoin.vercel.app/"/>
        <meta property="twitter:title" content="FoxCoin"/>
        <meta property="twitter:description" content="Fox Coin is a dapp created for ethereum 101 course of cadena.dev"/>
        <meta property="twitter:image" content="https://foxcoin.vercel.app/assets/LandingPage.png"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
