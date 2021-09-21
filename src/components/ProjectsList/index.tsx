import { Anchor } from 'components/Anchor/styles'
import Project from 'components/Project'
import * as S from './styles'

const ProjectsList = () => {
  return (
    <Anchor id="projects">
      <S.Wrapper>
        <h1>Projects</h1>
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </S.Wrapper>
    </Anchor>
  )
}

export default ProjectsList
