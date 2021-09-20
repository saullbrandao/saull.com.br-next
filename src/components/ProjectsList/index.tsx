import Project from 'components/Project'
import * as S from './styles'

const ProjectsList = () => {
  return (
    <S.Wrapper>
      <h1 id="projects">Projects</h1>
      <S.Grid>
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </S.Grid>
    </S.Wrapper>
  )
}

export default ProjectsList
