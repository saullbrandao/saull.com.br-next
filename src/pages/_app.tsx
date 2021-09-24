import ThemeToggler from 'components/ThemeToggler'
import { AppProps } from 'next/dist/shared/lib/router/router'
import Head from 'next/head'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import { darkTheme, lightTheme } from 'styles/themes'

function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(lightTheme)

  const toggleTheme = () => {
    const newTheme = theme.title === 'light' ? darkTheme : lightTheme
    setTheme(newTheme)
  }

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Saull Brandão</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
      <ThemeToggler toggleTheme={toggleTheme} />
    </ThemeProvider>
  )
}

export default App
