import { ThemeContext } from 'hooks/useTheme'
import { AppProps } from 'next/dist/shared/lib/router/router'
import Head from 'next/head'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import { darkTheme, lightTheme } from 'styles/themes'

function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(darkTheme)

  const toggleTheme = () => {
    const newTheme = theme.title === 'light' ? darkTheme : lightTheme
    setTheme(newTheme)
  }

  return (
    <ThemeContext.Provider value={{ themeMode: theme.title, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Saull Brandão | Portfolio</title>
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default App
