import Project from 'components/Project'
import * as S from './styles'

import projects from '../../../projects.json'

const ProjectsList = () => {
  return (
    <S.Wrapper>
      <h1>Projects</h1>
      {projects.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </S.Wrapper>
  )
}

export default ProjectsList
