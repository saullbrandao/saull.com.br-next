import About from 'components/About'
import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import ProjectsList from 'components/ProjectsList'
import Head from 'next/head'
import * as S from './styles'

const PortfolioTemplate = () => {
  return (
    <>
      <Head>
        <title>Saull Brandão | Portfolio</title>
      </Head>
      <S.Wrapper>
        <Navbar />
        <About />
        <ProjectsList />
        <Footer />
      </S.Wrapper>
    </>
  )
}

export default PortfolioTemplate
