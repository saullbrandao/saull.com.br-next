import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import Project from 'components/Project'
import Head from 'next/head'
import * as S from './styles'

import projects from '../../../projects.json'

const PortfolioTemplate = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Portfolio of projects made by the site's owner"
        />
        <title>Portfolio | Saull Brandão</title>
      </Head>
      <S.Wrapper>
        <Navbar />
        <S.ProjectsWrapper>
          <h1>Projects</h1>
          {projects.map((project) => (
            <Project key={project.id} {...project} />
          ))}
        </S.ProjectsWrapper>
        <Footer />
      </S.Wrapper>
    </>
  )
}

export default PortfolioTemplate
