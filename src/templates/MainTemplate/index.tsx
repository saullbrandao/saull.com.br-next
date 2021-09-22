import About from 'components/About'
import Navbar from 'components/Navbar'
import ProjectsList from 'components/ProjectsList'
import * as S from './styles'

const MainTemplate = () => {
  return (
    <S.Wrapper>
      <Navbar />
      <About />
      <ProjectsList />
    </S.Wrapper>
  )
}

export default MainTemplate
