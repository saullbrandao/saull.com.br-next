import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import Project from 'components/Project'
import Head from 'next/head'
import { useRouter } from 'next/router'
import * as S from './styles'

import projects from '../../../projects.json'

const PortfolioTemplate = () => {
  const { locale } = useRouter()
  const metaDescription =
    locale === 'pt-BR'
      ? 'Portfolio de projetos feitos pelo criador deste site'
      : "Portfolio of projects made by the site's owner"
  const headingText = locale === 'pt-BR' ? 'Projetos' : 'Projects'

  return (
    <>
      <Head>
        <meta name="description" content={metaDescription} />
        <title>Portfolio | Saull Brandão</title>
      </Head>
      <S.Wrapper>
        <Navbar />
        <S.ProjectsWrapper>
          <h1>{headingText}</h1>
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
