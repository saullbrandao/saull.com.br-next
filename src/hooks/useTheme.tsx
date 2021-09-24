import { createContext, useContext } from 'react'

type ThemeContextData = {
  themeMode: string
  toggleTheme: () => void
}

export const ThemeContext = createContext({} as ThemeContextData)

export const useTheme = () => {
  return useContext(ThemeContext)
}
