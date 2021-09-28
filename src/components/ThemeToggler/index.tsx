import { useTheme } from 'hooks/useTheme'
import { useRouter } from 'next/router'
import { VscColorMode } from 'react-icons/vsc'
import * as S from './styles'

type ThemeTogglerProps = {
  title?: string
}

const ThemeToggler = ({ title }: ThemeTogglerProps) => {
  const { toggleTheme } = useTheme()
  const { locale } = useRouter()

  return (
    <S.Toggle
      aria-label={locale === 'pt-BR' ? 'Trocar tema' : 'Toggle between themes'}
      onClick={toggleTheme}
    >
      {title}
      <VscColorMode />
    </S.Toggle>
  )
}

export default ThemeToggler
