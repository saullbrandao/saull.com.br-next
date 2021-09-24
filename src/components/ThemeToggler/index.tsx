import { useTheme } from 'hooks/useTheme'
import { VscColorMode } from 'react-icons/vsc'
import * as S from './styles'

const ThemeToggler = () => {
  const { toggleTheme } = useTheme()

  return (
    <S.Toggle onClick={toggleTheme}>
      <VscColorMode />
    </S.Toggle>
  )
}

export default ThemeToggler
