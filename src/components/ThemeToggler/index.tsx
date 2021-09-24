import { VscColorMode } from 'react-icons/vsc'
import * as S from './styles'

type ThemeTogglerProps = {
  toggleTheme: () => void
}

const ThemeToggler = ({ toggleTheme }: ThemeTogglerProps) => {
  return (
    <S.Toggle onClick={toggleTheme}>
      <VscColorMode />
    </S.Toggle>
  )
}

export default ThemeToggler
