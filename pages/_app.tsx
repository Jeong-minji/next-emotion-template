import { ThemeProvider } from '@emotion/react'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import globalStyle from '../styles/GlobalStyle'
import { lightTheme, darkTheme } from '../styles/Theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Project Name</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
      </Head>
      <ThemeProvider theme={lightTheme}>
        {globalStyle}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
