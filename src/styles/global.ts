import { createGlobalStyle } from 'styled-components'

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

const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  :root {
    --container: 100rem;
    --small: 1.5rem;
    --medium: 3rem;
    --large: 5rem;
  }


   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
    background: ${(props) => props.theme.colors.bg_primary};
    color: ${(props) => props.theme.colors.text_primary};
    transition: all 0.25s linear;
  }

  body {
    font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

  h1 {
    font-size: var(--medium);
    color: ${(props) => props.theme.colors.highlight};
  }

  p, a {
    font-size: var(--small);
    line-height: var(--medium);
  }

  a {
    color: ${(props) => props.theme.colors.highlight};
  }
`

export default GlobalStyles
