import About from 'components/About'
import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import ProjectsList from 'components/ProjectsList'
import * as S from './styles'

const MainTemplate = () => {
  return (
    <S.Wrapper>
      <Navbar />
      <About />
      <ProjectsList />
      <Footer />
    </S.Wrapper>
  )
}

export default MainTemplate
