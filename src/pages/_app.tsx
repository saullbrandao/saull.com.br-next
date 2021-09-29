import { ThemeContext } from 'hooks/useTheme'
import { AppProps } from 'next/dist/shared/lib/router/router'
import { AppContextType } from 'next/dist/shared/lib/utils'
import Head from 'next/head'
import { useRouter } from 'next/router'
import nookies from 'nookies'
import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import { darkTheme, lightTheme } from 'styles/themes'

type ThemeType = {
  title: string
  colors: {
    bg_primary: string
    bg_secondary: string
    text_primary: string
    text_secondary: string
    highlight: string
  }
}

type Props = AppProps & {
  preferredTheme?: ThemeType
}

function App({ Component, pageProps, preferredTheme }: Props) {
  const [theme, setTheme] = useState(preferredTheme || darkTheme)
  const { locale } = useRouter()

  const metaDescription =
    locale === 'pt-BR'
      ? 'Site para mostrar alguns links importantes e projetos feitos por um desenvolvedor'
      : 'A site to display important links and projects made by a developer'

  const toggleTheme = () => {
    const newTheme = theme.title === 'light' ? darkTheme : lightTheme
    setTheme(newTheme)

    handleTheme(newTheme)
  }

  const handleTheme = (newTheme: ThemeType) => {
    setTheme(newTheme)
    nookies.set(null, 'NEXT_THEME', newTheme.title, {
      maxAge: 100 * 365 * 24 * 60 * 60,
      path: '/'
    })
  }

  useEffect(() => {
    const themeCookieExists = nookies.get().NEXT_THEME
    if (themeCookieExists) return

    const preferDarkTheme = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches

    if (preferDarkTheme) {
      handleTheme(darkTheme)
    } else {
      handleTheme(lightTheme)
    }
  }, [])

  return (
    <ThemeContext.Provider value={{ themeMode: theme.title, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Head>
          <meta name="description" content={metaDescription} />
          <title>Home | Saull Brandão</title>
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

App.getInitialProps = async ({ ctx }: AppContextType) => {
  const { NEXT_THEME } = nookies.get(ctx)
  const preferredTheme = NEXT_THEME === 'light' ? lightTheme : darkTheme

  return { preferredTheme }
}

export default App
