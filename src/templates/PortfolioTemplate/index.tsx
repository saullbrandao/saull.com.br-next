import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import ProjectsList from 'components/ProjectsList'
import Head from 'next/head'
import * as S from './styles'

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
        <ProjectsList />
        <Footer />
      </S.Wrapper>
    </>
  )
}

export default PortfolioTemplate
