import { ThemeContext } from 'hooks/useTheme'
import { AppProps } from 'next/dist/shared/lib/router/router'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import { darkTheme, lightTheme } from 'styles/themes'

function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(darkTheme)

  const toggleTheme = () => {
    const newTheme = theme.title === 'light' ? darkTheme : lightTheme
    setTheme(newTheme)
    localStorage.theme = newTheme.title
  }

  useEffect(() => {
    // check if the theme is stored on localStorage
    // if not, check if the user's system preferred color scheme is set to dark
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setTheme(darkTheme)
    } else {
      setTheme(lightTheme)
    }
  }, [])

  return (
    <ThemeContext.Provider value={{ themeMode: theme.title, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Head>
          <meta
            name="description"
            content="A site to display projects made by a front end developer and important links"
          />
          <title>Home | Saull Brandão</title>
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default App
