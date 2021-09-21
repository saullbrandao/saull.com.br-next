import Project from 'components/Project'
import * as S from './styles'

const ProjectsList = () => {
  return (
    <S.Wrapper>
      <h1 id="projects">Projects</h1>
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
    </S.Wrapper>
  )
}

export default ProjectsList
