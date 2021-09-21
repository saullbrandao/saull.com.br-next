import SectionWrapper from 'components/SectionWrapper'
import Project from 'components/Project'
import * as S from './styles'

import projects from '../../../projects.json'

const ProjectsList = () => {
  return (
    <SectionWrapper id="projects">
      <S.Wrapper>
        <h1>Projects</h1>
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </S.Wrapper>
    </SectionWrapper>
  )
}

export default ProjectsList
