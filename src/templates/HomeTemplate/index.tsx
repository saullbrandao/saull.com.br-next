import Footer from 'components/Footer'
import ThemeToggler from 'components/ThemeToggler'
import Link from 'next/link'
import { FaFolderOpen, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import * as S from './styles'

const HomeTemplate = () => {
  return (
    <>
      <S.Container>
        <S.Heading>Saull Brandão</S.Heading>
        <S.Text>Front End Developer</S.Text>
        <S.Wrapper>
          <Link href="/portfolio">
            <a>
              Portfolio
              <FaFolderOpen />
            </a>
          </Link>
          <a
            href="https://github.com/saullbrandao"
            target="_blank"
            rel="noreferrer"
          >
            Github
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/saullbrandao/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
            <FaLinkedin />
          </a>

          <a
            href="https://twitter.com/saullbrandao"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
            <FaTwitter />
          </a>

          <ThemeToggler title="Theme" />
        </S.Wrapper>
        <Footer showIcons={false} />
      </S.Container>
    </>
  )
}

export default HomeTemplate
