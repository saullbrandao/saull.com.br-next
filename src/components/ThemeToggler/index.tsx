import { useTheme } from 'hooks/useTheme'
import { VscColorMode } from 'react-icons/vsc'
import * as S from './styles'

type ThemeTogglerProps = {
  title?: string
}

const ThemeToggler = ({ title }: ThemeTogglerProps) => {
  const { toggleTheme } = useTheme()

  return (
    <S.Toggle aria-label="Toggle between themes" onClick={toggleTheme}>
      {title}
      <VscColorMode />
    </S.Toggle>
  )
}

export default ThemeToggler
